import { z } from 'astro/zod';

export const HeaderConfigSchema = () => z
	.object({
		links: z.array(z.object({
			title: z.string(),
			href: z.string().url()
		})).optional()
	})
	.optional()
	.default({})
