/**
 * Cart Request Schemas (FN-ECOM-006)
 */

import { z } from 'zod';

export const addCartItemSchema = z.object({
  variantId: z.string().uuid(),
  quantity: z.number().int().min(1)
});

export const updateCartItemSchema = z.object({
  quantity: z.number().int().min(1)
});
