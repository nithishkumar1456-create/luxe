/**
 * Quality Inspection Request Schemas (FN-QC-001)
 * Seven release 1 checks + decision
 */

import { z } from 'zod';

export const createInspectionSchema = z.object({
  subjectId: z.string().uuid(),
  measurementCheck: z.enum(['PASS', 'FAIL']),
  colourCheck: z.enum(['PASS', 'FAIL']),
  strengthCheck: z.enum(['PASS', 'FAIL']),
  shrinkageCheck: z.enum(['PASS', 'FAIL']),
  needleCheck: z.enum(['PASS', 'FAIL']),
  finishCheck: z.enum(['PASS', 'FAIL']),
  packagingCheck: z.enum(['PASS', 'FAIL']),
  decision: z.enum(['APPROVED', 'REJECTED']),
  notes: z.string().max(2000).optional()
});
