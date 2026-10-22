/**
 * Authentication Service (FN-IAM-001)
 * Business rules: BR-IAM-001, BR-IAM-002
 */

export const authService = {
  /**
   * Log in user and generate JWT token
   * @param {{ email: string, password: string }} credentials
   */
  async login(_credentials) {
    // Architecture Placeholder: Validate against password hash, return token + user roles
    return { token: null, user: null };
  },

  /**
   * Get current authenticated user profile
   * @param {string} userId
   */
  async getProfile(_userId) {
    // Architecture Placeholder
    return null;
  }
};
