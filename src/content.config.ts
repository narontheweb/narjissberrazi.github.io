import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({ title: z.string(), client: z.string(), order: z.number(), tier: z.enum(['primary', 'independent', 'leadership']), tags: z.array(z.string()), summary: z.string(), evidence: z.string(), evidenceNote: z.string().optional() }),
});
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({ title: z.string(), client: z.string(), order: z.number(), tags: z.array(z.string()) }),
});
export const collections = { cases, experience };
