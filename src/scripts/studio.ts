import studio from '../data/studio.json';
import { governancePath, recommendation, opportunityScore, type Initiative } from '../lib/studio';
const root = document.querySelector<HTMLElement>('#studio');
if (root) {
  const initiatives: Initiative[] = studio.initiatives;
  const functionFilter = root.querySelector<HTMLSelectElement>('#studio-function')!;
  const governanceFilter = root.querySelector<HTMLSelectElement>('#studio-governance')!;
  const recommendationFilter = root.querySelector<HTMLSelectElement>('#studio-recommendation')!;
  const detail = root.querySelector<HTMLElement>('#initiative-detail')!;
  const count = root.querySelector<HTMLElement>('#studio-result-count')!;
  const empty = root.querySelector<HTMLElement>('#studio-empty')!;
  const status = root.querySelector<HTMLElement>('#studio-selection-status')!;
  let selectedId = 2;
  const setText = (name: string, value: string) => {
    const element = root.querySelector<HTMLElement>(`[data-detail="${name}"]`);
    if (element) element.textContent = value;
  };
  function select(initiative: Initiative, announce = true) {
    selectedId = initiative.id;
    detail.hidden = false;
    for (const field of ['title','function','problem','rationale','risks','nextDecision','action'] as const) setText(field, initiative[field]);
    setText('score', opportunityScore(initiative.scores).toFixed(1));
    setText('governance', governancePath(initiative));
    setText('recommendation', recommendation(initiative));
    for (const [key,value] of Object.entries(initiative.scores)) {
      const element = root!.querySelector<HTMLElement>(`[data-score="${key}"]`);
      if (element) element.textContent = String(value);
    }
    root!.querySelectorAll<HTMLButtonElement>('[data-initiative]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.initiative) === selectedId));
    });
    if (announce) status.textContent = `${initiative.title} selected. ${recommendation(initiative)}. ${governancePath(initiative)}. Details and 90-day action updated.`;
  }
  function filter() {
    const matching = initiatives.filter(i => (functionFilter.value === 'all' || i.function === functionFilter.value) && (governanceFilter.value === 'all' || governancePath(i) === governanceFilter.value) && (recommendationFilter.value === 'all' || recommendation(i) === recommendationFilter.value));
    const ids = new Set(matching.map(i=>i.id));
    root!.querySelectorAll<HTMLElement>('[data-studio-item]').forEach(item => { item.hidden = !ids.has(Number(item.dataset.studioItem)); });
    root!.querySelectorAll<HTMLButtonElement>('.matrix-point').forEach(point => { point.hidden = !ids.has(Number(point.dataset.initiative)); });
    count.textContent = `Showing ${matching.length} of 8 opportunities. Portfolio overview counts refer to all 8.`;
    empty.hidden = matching.length > 0;
    detail.hidden = matching.length === 0;
    if (matching.length && !ids.has(selectedId)) select(matching[0]);
    if (!matching.length) status.textContent = '';
  }
  root.querySelectorAll<HTMLButtonElement>('[data-initiative]').forEach(button => {
    button.addEventListener('click', () => {
      const initiative = initiatives.find(i=>i.id === Number(button.dataset.initiative));
      if (!initiative) return;
      select(initiative);
      if (matchMedia('(max-width: 700px)').matches) {
        const heading = root.querySelector<HTMLElement>('#initiative-title')!;
        heading.focus({ preventScroll:true });
        detail.scrollIntoView({ block:'start', behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
    });
  });
  [functionFilter, governanceFilter, recommendationFilter].forEach(filterSelect => filterSelect.addEventListener('change', filter));
  root.querySelector<HTMLButtonElement>('#studio-reset')!.addEventListener('click', () => {
    [functionFilter, governanceFilter, recommendationFilter].forEach(filterSelect => { filterSelect.value='all'; });
    select(initiatives.find(i=>i.id===2)!);
    filter();
  });
  const help = root.querySelector<HTMLButtonElement>('.score-help')!;
  help.addEventListener('click', () => {
    const open = help.getAttribute('aria-expanded') !== 'true';
    help.setAttribute('aria-expanded',String(open));
    root.querySelector<HTMLElement>('#score-explanation')!.hidden = !open;
  });
  select(initiatives.find(i=>i.id===2)!, false);
}
