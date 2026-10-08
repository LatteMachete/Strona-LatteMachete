import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Biznes', 'Zdrowie', 'Społeczeństwo', 'Polityka', 'Codzienność']),
    excerpt: z.string(),
    minutes: z.number().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
