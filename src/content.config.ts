import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const sector = z.enum(['Corporates','Public Sector & Government','Banking & Financial Services','Financial Market Infrastructure & Payments','Postal & Logistics','Higher Education & Research','Professional Services']);
const text = z.string().min(1);
const miniature = z.object({label:text,description:text,image:z.string().startsWith('/images/').optional(),alt:text.optional()}).refine(item=>!item.image || !!item.alt,{message:'A deliverable image requires descriptive alt text'});
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: text, clientLabel: text, sector, order: z.number().int().positive(), tags: z.array(text).min(1), summary: text,
    context: text, challenge: text, contribution: z.array(text).min(1),
    evidence: z.array(z.object({label:text,note:text.optional()})).min(1),
    deliverables: z.array(text).min(1), visualPlaceholders: z.array(miniature).min(2).max(3),
    training: z.array(z.object({title:text,description:text})).optional(),
  }),
});
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({ title: text, clientLabel: text, sector, order: z.number().int().positive(), description:text, tags: z.array(text).min(1) }),
});
const focus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/focus' }),
  schema: z.object({status:z.enum(['upcoming','current','hidden']),clientLabel:text,sector,title:text,description:text,tags:z.array(text).min(1)}),
});
export const collections = { cases, experience, focus };
