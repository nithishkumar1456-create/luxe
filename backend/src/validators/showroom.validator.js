/**
 * Showroom Request Schemas (FN-STORE-001, FN-STORE-003, FN-STORE-004)
 */

import { z } from 'zod';

export const registerShowroomSchema = z.object({
  name: z.string().min(1).max(160),
  code: z.string().min(1).max(30),
  address: z.string().min(1).max(500),
  status: z.enum(['active', 'inactive']).default('active')
});

export const bookVisitSchema = z.object({
  customerId: z.string().uuid(),
  startsAt: z.string().datetime(),
  note: z.string().max(2000).optional()
});

export const inStoreOrderSchema = z.object({
  customerId: z.string().uuid(),
  showroomId: z.string().uuid(),
  variantId: z.string().uuid(),
  quantity: z.number().int().positive()
});
