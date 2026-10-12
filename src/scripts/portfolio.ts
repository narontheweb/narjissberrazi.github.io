const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const caseButtons = [...document.querySelectorAll<HTMLButtonElement>('.case-toggle')];
const animations = new WeakMap<HTMLElement, Animation>();
function toggleCase(button: HTMLButtonElement, open: boolean, animate = true) {
  const panel = document.getElementById(button.getAttribute('aria-controls')!)!;
  animations.get(panel)?.cancel();
  button.setAttribute('aria-expanded',String(open));
  const label = button.querySelector<HTMLElement>('[data-toggle-label]')!;
  label.textContent = open ? 'Close case' : 'View case';
  if (!animate || reducedMotion()) { panel.hidden = !open; return; }
  panel.hidden = false;
  const height = panel.scrollHeight;
  const animation = panel.animate({ height:open ? ['0px',`${height}px`] : [`${height}px`,'0px'], opacity:open ? [0,1] : [1,0] },{duration:220,easing:'ease-out'});
  animations.set(panel,animation);
  animation.finished.then(()=>{
    if (!open && button.getAttribute('aria-expanded')==='false') panel.hidden = true;
  }).catch(()=>{});
}
caseButtons.forEach(button => button.addEventListener('click',()=>{
  const open = button.getAttribute('aria-expanded')!=='true';
  if (open && matchMedia('(max-width:700px)').matches) caseButtons.filter(other=>other!==button).forEach(other=>toggleCase(other,false,false));
  toggleCase(button,open);
}));

const sectorButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-sector-filter]')];
const items = [...document.querySelectorAll<HTMLElement>('[data-experience-sector]')];
const filterStatus = document.querySelector<HTMLElement>('#sector-status')!;
const reset = document.querySelector<HTMLButtonElement>('#sector-clear')!;
let activeSector = 'all';
function applySector(sector: string, shouldNavigate: boolean) {
  activeSector = sector;
  const matching = items.filter(item=>sector==='all' || item.dataset.experienceSector===sector);
  items.forEach(item=>{
    const match = sector==='all' || item.dataset.experienceSector===sector;
    item.classList.toggle('sector-match',sector!=='all'&&match);
    item.classList.toggle('sector-muted',!match);
    item.classList.toggle('sector-mobile-hidden',!match);
    if (!match) {
      item.querySelectorAll<HTMLButtonElement>('.case-toggle').forEach(button=>toggleCase(button,false,false));
    }
  });
  sectorButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sectorFilter===sector)));
  filterStatus.textContent = sector==='all' ? 'Showing experience: All sectors' : `Showing experience: ${sector} · ${matching.length} ${matching.length===1 ? 'item' : 'items'}`;
  reset.hidden = sector==='all';
  document.querySelector<HTMLElement>('#sector-filter-context')!.classList.toggle('filter-active',sector!=='all');
  // Focus the contextual control first, then scroll exactly once. This avoids a focused
  // filter button being left below the viewport after navigation.
  if (shouldNavigate) {
    const target = sector==='Financial Market Infrastructure & Payments' ? document.querySelector<HTMLElement>('#current-focus')! : document.querySelector<HTMLElement>('#work-heading')!;
    const focusTarget = sector==='Financial Market Infrastructure & Payments' ? target : (sector==='all' ? target : reset);
    focusTarget.focus({preventScroll:true});
    const scrollTarget = sector==='Financial Market Infrastructure & Payments' ? target : document.querySelector<HTMLElement>('#work')!;
    scrollTarget.scrollIntoView({block:'start',behavior:reducedMotion() ? 'instant' : 'smooth'});
  }
}
sectorButtons.forEach(button=>button.addEventListener('click',()=>applySector(button.dataset.sectorFilter!,true)));
reset.addEventListener('click',()=>applySector('all',true));
matchMedia('(max-width:700px)').addEventListener('change',()=>applySector(activeSector,false));

const studio = document.querySelector<HTMLElement>('#studio')!;
const studioOpen = document.querySelector<HTMLButtonElement>('#studio-open')!;
const studioClose = document.querySelector<HTMLButtonElement>('#studio-close')!;
studioOpen.addEventListener('click',()=>{
  studio.hidden=false;
  studioOpen.setAttribute('aria-expanded','true');
  document.querySelector<HTMLElement>('#studio-heading')!.focus({preventScroll:true});
  studio.scrollIntoView({block:'start',behavior:reducedMotion() ? 'instant' : 'smooth'});
});
studioClose.addEventListener('click',()=>{
  studio.hidden=true;
  studioOpen.setAttribute('aria-expanded','false');
  studioOpen.focus({preventScroll:true});
  studioOpen.scrollIntoView({block:'center',behavior:reducedMotion() ? 'instant' : 'smooth'});
});
