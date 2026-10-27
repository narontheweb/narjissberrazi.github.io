const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const runningMotion = new Set<Animation>();
function animate(element: HTMLElement, frames: Keyframe[] | PropertyIndexedKeyframes, options: KeyframeAnimationOptions) {
  const animation = element.animate(frames, options);
  runningMotion.add(animation);
  animation.finished.then(() => runningMotion.delete(animation), () => runningMotion.delete(animation));
  return animation;
}

const caseButtons = [...document.querySelectorAll<HTMLButtonElement>('.case-toggle')];
const cases = caseButtons.map(button => ({ button, panel: document.getElementById(button.getAttribute('aria-controls')!)! }));
const caseAnimations = new Map<HTMLElement, Animation>();
let accordionSequence = 0;
let cancelPreservation = () => {};
let settleAccordion: (() => void) | undefined;
function toggleCase(clicked: HTMLButtonElement) {
  const shouldOpen = clicked.getAttribute('aria-expanded') !== 'true';
  let anchorTop = clicked.getBoundingClientRect().top;
  const states = new Map(cases.map(({ panel }) => [panel, {
    height: panel.hidden ? 0 : panel.getBoundingClientRect().height,
    opacity: panel.hidden ? 0 : Number(getComputedStyle(panel).opacity),
  }]));
  cancelPreservation();
  const sequence = ++accordionSequence;
  document.documentElement.classList.add('accordion-transition');
  for (const { panel } of cases) {
    if (!panel.hidden) panel.style.height = `${states.get(panel)!.height}px`;
  }
  for (const animation of caseAnimations.values()) animation.cancel();
  caseAnimations.clear();

  let preserveAnchor = true;
  let frame = 0;
  const stopPreserving = () => {
    // Passive scroll input may already have moved the viewport on the compositor.
    // Keep that new reading position when settling the remaining layout change.
    anchorTop = clicked.getBoundingClientRect().top;
    finish();
    preserveAnchor = false;
  };
  const respectScrollKeys = (event: KeyboardEvent) => {
    if (['PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown'].includes(event.key)) stopPreserving();
  };
  // Compensate only for accordion reflow, never for intentional user scrolling.
  window.addEventListener('wheel', stopPreserving, { passive: true });
  window.addEventListener('touchmove', stopPreserving, { passive: true });
  window.addEventListener('keydown', respectScrollKeys);
  cancelPreservation = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('wheel', stopPreserving);
    window.removeEventListener('touchmove', stopPreserving);
    window.removeEventListener('keydown', respectScrollKeys);
  };
  const correctViewport = () => {
    if (!preserveAnchor) return;
    const offset = clicked.getBoundingClientRect().top - anchorTop;
    if (Math.abs(offset) > 0.5) window.scrollBy({ top: offset, behavior: 'instant' });
  };
  let settled = false;
  const finish = () => {
    if (sequence !== accordionSequence || settled) return;
    settled = true;
    cancelPreservation();
    for (const { button, panel } of cases) {
      panel.hidden = button.getAttribute('aria-expanded') !== 'true';
      panel.style.removeProperty('height');
    }
    for (const animation of caseAnimations.values()) animation.cancel();
    caseAnimations.clear();
    correctViewport();
    document.documentElement.classList.remove('accordion-transition');
    settleAccordion = undefined;
  };
  settleAccordion = finish;
  for (const { button, panel } of cases) {
    const open = button === clicked && shouldOpen;
    const state = states.get(panel)!;
    button.setAttribute('aria-expanded', String(open));
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    button.querySelector<HTMLElement>('[data-toggle-label]')!.textContent = open ? 'Close case' : 'View case';
    button.querySelector<HTMLElement>('[data-toggle-icon]')!.textContent = open ? ' ↑' : ' ↓';
    if (motionPreference.matches || !panel.animate || (!open && state.height === 0)) {
      panel.hidden = !open;
      panel.style.removeProperty('height');
      continue;
    }
    panel.hidden = false;
    panel.style.height = 'auto';
    const targetHeight = open ? panel.getBoundingClientRect().height : 0;
    panel.style.height = `${state.height}px`;
    caseAnimations.set(panel, animate(panel, {
      height: [`${state.height}px`, `${targetHeight}px`],
      opacity: [state.opacity, open ? 1 : 0],
    }, { duration: 240, easing: 'ease-out', fill: 'both' }));
  }
  clicked.focus({ preventScroll: true });
  if (!caseAnimations.size) { finish(); return; }
  const preserveFrame = () => {
    if (sequence !== accordionSequence) return;
    correctViewport();
    frame = requestAnimationFrame(preserveFrame);
  };
  preserveFrame();
  Promise.allSettled([...caseAnimations.values()].map(animation => animation.finished)).then(finish);
}
caseButtons.forEach(button => button.addEventListener('click', () => toggleCase(button)));
window.addEventListener('resize', () => settleAccordion?.());

const revealTargets = [...document.querySelectorAll<HTMLElement>('.section-heading, .case-row, .experience-list details, .credentials')];
let revealObserver: IntersectionObserver | undefined;
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      revealObserver!.unobserve(entry.target);
      if (motionPreference.matches || !(entry.target instanceof HTMLElement) || !entry.target.animate) continue;
      animate(entry.target, { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0)'] }, { duration: 220, easing: 'ease-out' });
    }
  }, { threshold: 0.06, rootMargin: '0px 0px -18px 0px' });
  revealTargets.forEach(target => revealObserver!.observe(target));
}
motionPreference.addEventListener('change', event => {
  if (!event.matches) return;
  revealObserver?.disconnect();
  for (const animation of runningMotion) {
    if (animation.playState === 'running') animation.finish();
  }
});

const header = document.querySelector<HTMLElement>('.site-header')!;
const work = document.querySelector<HTMLElement>('#work')!;
const about = document.querySelector<HTMLElement>('#about')!;
const navigation = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
let scheduled = false;
function updateNavigation() {
  scheduled = false;
  const headerHeight = Math.ceil(header.getBoundingClientRect().height);
  const heightValue = `${headerHeight}px`;
  if (document.documentElement.style.getPropertyValue('--header-height') !== heightValue) {
    document.documentElement.style.setProperty('--header-height', heightValue);
  }
  const boundary = headerHeight + 36;
  const active = about.getBoundingClientRect().top <= boundary ? 'about' : work.getBoundingClientRect().top <= boundary ? 'work' : 'home';
  for (const link of navigation) {
    if (link.dataset.sectionLink === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
function scheduleNavigation() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateNavigation);
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('hashchange', scheduleNavigation);
if ('ResizeObserver' in window) {
  const observer = new ResizeObserver(scheduleNavigation);
  observer.observe(header);
  observer.observe(document.querySelector('main')!);
}
updateNavigation();

const preview = document.querySelector<HTMLDialogElement>('#deliverable-preview')!;
const previewImage = document.createElement('img');
previewImage.id = 'preview-image';
previewImage.width = 1200;
previewImage.height = 800;
let previewTrigger: HTMLButtonElement | undefined;
document.querySelectorAll<HTMLButtonElement>('[data-preview-src]').forEach(button => {
  button.addEventListener('click', () => {
    previewTrigger = button;
    previewImage.src = button.dataset.previewSrc!;
    previewImage.alt = button.dataset.previewAlt!;
    preview.querySelector('#preview-image-container')!.replaceChildren(previewImage);
    preview.querySelector<HTMLElement>('#preview-title')!.textContent = button.dataset.previewTitle!;
    preview.showModal();
    document.documentElement.classList.add('visual-preview-open');
  });
});
preview.querySelector<HTMLButtonElement>('.preview-close')!.addEventListener('click', () => preview.close());
preview.addEventListener('click', event => { if (event.target === preview) preview.close(); });
preview.addEventListener('close', () => {
  document.documentElement.classList.remove('visual-preview-open');
  previewTrigger?.focus({ preventScroll: true });
  previewImage.remove();
  previewImage.removeAttribute('src');
});
