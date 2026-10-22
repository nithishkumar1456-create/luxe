/**
 * Inventory Request Schemas (FN-INV-001, FN-STORE-002)
 */

import { z } from 'zod';

export const stockTransactionSchema = z.object({
  variantId: z.string().uuid(),
  warehouseId: z.string().uuid(),
  quantityDelta: z.number(),
  reason: z.enum(['receipt', 'order', 'transfer', 'adjustment', 'release']),
  referenceId: z.string().uuid()
});

export const stockTransferSchema = z.object({
  variantId: z.string().uuid(),
  fromLocation: z.string().uuid(),
  toShowroom: z.string().uuid(),
  quantity: z.number().positive()
});
