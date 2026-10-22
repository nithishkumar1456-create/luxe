/**
 * Catalogue Request Schemas (FN-ECOM-012)
 */

import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1).max(200),
  sku: z.string().min(1).max(40),
  categoryId: z.string().uuid(),
  price: z.number().nonnegative(),
  description: z.string().max(5000).optional(),
  fabricText: z.string().max(5000).optional(),
  careInstructions: z.string().max(5000).optional(),
  status: z.enum(['active', 'inactive']).default('inactive')
});

export const updateProductSchema = createProductSchema.partial();
