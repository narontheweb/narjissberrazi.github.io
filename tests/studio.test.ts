import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { opportunityScore, governancePath, recommendation, validateInitiatives, type Initiative } from '../src/lib/studio.ts';
const initiatives: Initiative[] = JSON.parse(readFileSync(new URL('../src/data/studio.json', import.meta.url), 'utf8')).initiatives;
const base = initiatives[0]!;
test('all eight approved scenarios produce the specified recommendations and governance distribution', () => {
  validateInitiatives(initiatives);
  assert.equal(initiatives.length, 8);
  assert.deepEqual(initiatives.map(recommendation), ['PROCEED','PROCEED','PROCEED','PROCEED','EXPLORE','EXPLORE','EXPLORE','DEFER']);
  assert.deepEqual(initiatives.map(governancePath), ['STANDARD','ENHANCED','ENHANCED','ENHANCED','HIGH OVERSIGHT','ENHANCED','ENHANCED','HIGH OVERSIGHT']);
});
test('positive and constraint scores use the stated weighting and stay on a 1–5 scale', () => {
  assert.equal(opportunityScore({value:5,feasibility:5,dataReadiness:5,strategicAlignment:5,risk:1,adoptionComplexity:1}), 5);
  assert.equal(opportunityScore({value:1,feasibility:1,dataReadiness:1,strategicAlignment:1,risk:5,adoptionComplexity:5}), 1);
  assert.ok(Math.abs(opportunityScore(initiatives[0]!.scores) - 4.35) < 1e-9);
  assert.ok(Math.abs(opportunityScore(initiatives[3]!.scores) - 3.7) < 1e-9);
});
test('sensitive data, adoption complexity and material decision impact override standard governance', () => {
  assert.equal(governancePath({...base,sensitiveData:true}),'ENHANCED');
  assert.equal(governancePath({...base,scores:{...base.scores,adoptionComplexity:4}}),'ENHANCED');
  assert.equal(governancePath({...base,highImpactDecision:true}),'HIGH OVERSIGHT');
});
test('high numerical scores cannot bypass high-impact oversight or unresolved validation', () => {
  assert.equal(recommendation({...base,highImpactDecision:true}),'EXPLORE');
  assert.equal(recommendation({...base,validationRequired:true}),'EXPLORE');
  assert.equal(recommendation({...base,unresolvedHighImpactRisk:true}),'DEFER');
  assert.equal(recommendation({...base,highImpactDecision:true,scores:{...base.scores,dataReadiness:2}}),'DEFER');
});
test('controlled pilot exception is explicit and cannot bypass data-readiness or risk gates', () => {
  const customer=initiatives[3]!;
  assert.equal(recommendation({...customer,controlledPilot:false}),'EXPLORE');
  assert.equal(recommendation({...customer,scores:{...customer.scores,dataReadiness:3}}),'EXPLORE');
  assert.equal(recommendation({...customer,scores:{...customer.scores,risk:4}}),'EXPLORE');
});
test('low feasibility and weak management cases cannot proceed', () => {
  assert.equal(recommendation({...base,scores:{...base.scores,feasibility:2}}),'EXPLORE');
  assert.equal(recommendation({...base,scores:{value:1,feasibility:1,dataReadiness:1,strategicAlignment:1,risk:5,adoptionComplexity:5}}),'DEFER');
});
test('invalid score ranges and duplicate IDs fail rather than silently producing rankings', () => {
  assert.throws(()=>validateInitiatives([{...base,scores:{...base.scores,value:6}}]));
  assert.throws(()=>validateInitiatives([base,base]));
});
