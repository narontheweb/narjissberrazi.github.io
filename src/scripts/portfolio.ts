const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const caseButtons = [...document.querySelectorAll<HTMLButtonElement>('.case-toggle')];
const animations = new WeakMap<HTMLElement, Animation>();
function toggleCase(button: HTMLButtonElement, open: boolean, animate = true) {
  const panel = document.getElementById(button.getAttribute('aria-controls')!)!;
  animations.get(panel)?.cancel();
  button.setAttribute('aria-expanded',String(open));
  const label = button.querySelector<HTMLElement>('[data-toggle-label]')!;
  label.textContent = open ? 'Close case' : 'View case';
  button.querySelector<HTMLElement>('[data-toggle-icon]')!.textContent = open ? ' ↑' : ' ↓';
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
  const wasResetFocused = document.activeElement === reset;
  activeSector = sector;
  const matching = items.filter(item=>sector==='all' || item.dataset.experienceSector===sector);
  items.forEach(item=>{
    const match = sector==='all' || item.dataset.experienceSector===sector;
    item.classList.toggle('sector-match',sector!=='all'&&match);
    item.classList.toggle('sector-filtered-out',!match);
    if (!match) {
      item.querySelectorAll<HTMLButtonElement>('.case-toggle').forEach(button=>toggleCase(button,false,false));
    }
  });
  sectorButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sectorFilter===sector)));
  filterStatus.textContent = sector==='all' ? 'Showing: All' : `Showing: ${sector} · ${matching.length} ${matching.length===1 ? 'item' : 'items'}`;
  reset.hidden = sector==='all';
  document.querySelector<HTMLElement>('#sector-filter-context')!.classList.toggle('filter-active',sector!=='all');
  document.querySelector<HTMLElement>('#sector-empty')!.hidden = sector==='all' || matching.length>0;
  // Filters now live beside the experience they control. Keep focus on the selected
  // button, and avoid scrolling the page as results update.
  if (shouldNavigate && sector==='all' && wasResetFocused) {
    sectorButtons.find(button=>button.dataset.sectorFilter==='all')!.focus({preventScroll:true});
  }
}
sectorButtons.forEach(button=>button.addEventListener('click',()=>applySector(button.dataset.sectorFilter!,true)));
reset.addEventListener('click',()=>applySector('all',true));
matchMedia('(max-width:700px)').addEventListener('change',()=>applySector(activeSector,false));
