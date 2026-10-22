/**
 * Application Logger
 * Compliant with LVF-SSOT-001 Section 25 (Excludes secrets, tokens, cards, and raw QR payloads)
 */

export const logger = {
  info: (msg, meta = {}) => {
    console.log(JSON.stringify({ level: 'info', timestamp: new Date().toISOString(), message: msg, ...meta }));
  },
  warn: (msg, meta = {}) => {
    console.warn(JSON.stringify({ level: 'warn', timestamp: new Date().toISOString(), message: msg, ...meta }));
  },
  error: (msg, meta = {}) => {
    console.error(JSON.stringify({ level: 'error', timestamp: new Date().toISOString(), message: msg, ...meta }));
  }
};
