/**
 * Connect Fashions Request Schemas (FN-CON-001, FN-CON-002)
 */

import { z } from 'zod';

export const linkPieceSchema = z.object({
  collectionId: z.string().uuid(),
  productId: z.string().uuid().optional(),
  fabricBatchId: z.string().uuid().optional(),
  productionOrderId: z.string().uuid().optional()
});

export const publishPieceSchema = z.object({
  fashionLinkId: z.string().uuid()
});
