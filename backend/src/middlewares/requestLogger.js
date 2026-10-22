/**
 * Request Logger Middleware
 * Adheres to SSOT Section 25: Logs request id, route, status, and duration.
 */

import { randomUUID } from 'crypto';
import { logger } from '../utils/logger.js';

export const requestLogger = (req, res, next) => {
  req.id = req.headers['x-request-id'] || randomUUID();
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      requestId: req.id,
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      durationMs: duration
    });
  });

  next();
};
