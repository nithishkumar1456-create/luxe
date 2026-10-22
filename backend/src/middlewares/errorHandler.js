/**
 * Global Error Handler Middleware
 * Implements SSOT Section 15 error envelope and masking.
 */

import { errorResponse } from '../utils/envelope.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, _next) => {
  const logId = req.id || 'err_' + Date.now();
  logger.error('Unhandled Exception', { logId, message: err.message, stack: err.stack });

  if (err.statusCode) {
    return errorResponse(res, err.statusCode, err.message, err.errorCode || 'ERROR');
  }

  // Section 15: A 500 body does not include SQL or a stack. Generic message + server log id.
  return errorResponse(
    res,
    500,
    `Something went wrong. Quote reference: ${logId}`,
    'INTERNAL_SERVER_ERROR'
  );
};
