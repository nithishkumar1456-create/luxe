/**
 * Standard API Response Envelope
 * Compliant with LVF-SSOT-001 Section 11 & Section 15
 *
 * Success: { success: true, message, data }
 * Error:   { success: false, message, errorCode }
 */

export const successResponse = (res, statusCode = 200, message = 'Success', data = null) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (res, statusCode = 400, message = 'Error', errorCode = 'ERROR') => {
  return res.status(statusCode).json({
    success: false,
    message,
    errorCode
  });
};
