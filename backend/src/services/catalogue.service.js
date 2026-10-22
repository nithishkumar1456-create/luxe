/**
 * Catalogue Service (FN-ECOM-001, FN-ECOM-002, FN-ECOM-003, FN-ECOM-004, FN-ECOM-012)
 * Business rules: BR-ECOM-001, BR-ECOM-002, BR-CAT-001, BR-CAT-002
 */

export const catalogueService = {
  async getProducts(_filters) {
    // Architecture Placeholder: Paginated active products for public / all for staff
    return { items: [], total: 0, page: 1 };
  },

  async getProductById(_id, _isStaff = false) {
    // Architecture Placeholder
    return null;
  },

  async createProduct(_data, _actorId) {
    // Architecture Placeholder: Enforces unique SKU (BR-CAT-001)
    return null;
  },

  async updateProduct(_id, _data, _actorId) {
    // Architecture Placeholder
    return null;
  },

  async deactivateProduct(_id, _actorId) {
    // Architecture Placeholder: Soft deactivate if orders exist (BR-CAT-002)
    return null;
  }
};
