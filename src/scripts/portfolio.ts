const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const runningMotion = new Set<Animation>();
function animate(element: HTMLElement, frames: Keyframe[] | PropertyIndexedKeyframes, options: KeyframeAnimationOptions) {
  const animation = element.animate(frames, options);
  runningMotion.add(animation);
  animation.finished.then(() => runningMotion.delete(animation), () => runningMotion.delete(animation));
  return animation;
}

const caseButtons = [...document.querySelectorAll<HTMLButtonElement>('.case-toggle')];
const caseAnimations = new WeakMap<HTMLElement, Animation>();
function toggleCase(button: HTMLButtonElement, open: boolean) {
  const panel = document.getElementById(button.getAttribute('aria-controls')!)!;
  const currentHeight = panel.hidden ? 0 : panel.getBoundingClientRect().height;
  caseAnimations.get(panel)?.cancel();
  button.setAttribute('aria-expanded', String(open));
  button.querySelector<HTMLElement>('[data-toggle-label]')!.textContent = open ? 'Close case' : 'View case';
  button.querySelector<HTMLElement>('[data-toggle-icon]')!.textContent = open ? ' ↑' : ' ↓';
  if (motionPreference.matches || !panel.animate) {
    panel.hidden = !open;
    return;
  }
  panel.hidden = false;
  const targetHeight = panel.scrollHeight;
  const animation = animate(panel, {
    height: [`${currentHeight}px`, open ? `${targetHeight}px` : '0px'],
    opacity: open ? [0.35, 1] : [1, 0],
  }, { duration: 240, easing: 'ease-out' });
  caseAnimations.set(panel, animation);
  animation.finished.then(() => {
    if (!open && button.getAttribute('aria-expanded') === 'false') panel.hidden = true;
  }).catch(() => {});
}
// Independent panels avoid collapsing content above the reader when another case opens.
caseButtons.forEach(button => button.addEventListener('click', () => {
  toggleCase(button, button.getAttribute('aria-expanded') !== 'true');
}));

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
