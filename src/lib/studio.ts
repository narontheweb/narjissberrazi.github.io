export interface Scores {
  value: number;
  feasibility: number;
  dataReadiness: number;
  risk: number;
  adoptionComplexity: number;
  strategicAlignment: number;
}
export interface Initiative {
  id: number;
  title: string;
  function: string;
  problem: string;
  scores: Scores;
  sensitiveData: boolean;
  highImpactDecision: boolean;
  unresolvedHighImpactRisk: boolean;
  validationRequired: boolean;
  controlledPilot: boolean;
  rationale: string;
  risks: string;
  nextDecision: string;
  action: string;
}
export type Governance = 'STANDARD' | 'ENHANCED' | 'HIGH OVERSIGHT';
export type Recommendation = 'PROCEED' | 'EXPLORE' | 'DEFER';
export function opportunityScore({ value, feasibility, dataReadiness, strategicAlignment, risk, adoptionComplexity }: Scores): number {
  return 0.3 * value + 0.2 * feasibility + 0.15 * dataReadiness + 0.15 * strategicAlignment + 0.1 * (6 - risk) + 0.1 * (6 - adoptionComplexity);
}
export function governancePath(initiative: Initiative): Governance {
  const { risk, adoptionComplexity } = initiative.scores;
  if (risk >= 4 || initiative.highImpactDecision) return 'HIGH OVERSIGHT';
  if (risk === 3 || adoptionComplexity >= 4 || initiative.sensitiveData) return 'ENHANCED';
  return 'STANDARD';
}
export function recommendation(initiative: Initiative): Recommendation {
  const score = opportunityScore(initiative.scores);
  const { dataReadiness, risk, feasibility } = initiative.scores;
  if (initiative.unresolvedHighImpactRisk || (governancePath(initiative) === 'HIGH OVERSIGHT' && dataReadiness <= 2) || score < 3) return 'DEFER';
  // Governance and unresolved implementation questions take precedence over ranking.
  if (governancePath(initiative) === 'HIGH OVERSIGHT' || initiative.validationRequired) return 'EXPLORE';
  if (score + 1e-9 >= 3.8 && dataReadiness >= 3 && feasibility >= 4 && risk <= 3) return 'PROCEED';
  // Explicit controlled-pilot exception for the specified customer-service scenario.
  if (initiative.controlledPilot && score + 1e-9 >= 3.7 && dataReadiness >= 4 && feasibility >= 4 && risk <= 3) return 'PROCEED';
  return 'EXPLORE';
}
export function validateInitiatives(initiatives: Initiative[]): void {
  const ids = new Set<number>();
  for (const initiative of initiatives) {
    if (ids.has(initiative.id)) throw new Error('Duplicate initiative ID');
    ids.add(initiative.id);
    for (const score of Object.values(initiative.scores)) {
      if (!Number.isInteger(score) || score < 1 || score > 5) throw new Error('Studio scores must be integers from 1 to 5');
    }
  }
}
export const scoreLabels: Record<keyof Scores, string> = {
  value: 'Business value', feasibility: 'Feasibility', dataReadiness: 'Data readiness', risk: 'Risk', adoptionComplexity: 'Adoption complexity', strategicAlignment: 'Strategic alignment',
};
