/**
 * Showroom Service (FN-STORE-001, FN-STORE-003, FN-STORE-004, FN-STORE-005, FN-STORE-006)
 * Business rules: BR-STORE-001, BR-STORE-002, BR-STORE-003, BR-CRM-002
 */

export const showroomService = {
  async registerShowroom(_data, _actorId) {
    // Architecture Placeholder
    return null;
  },

  async bookVisit(_data, _actorId) {
    // Architecture Placeholder
    return null;
  },

  async createInStoreOrder(_data, _staffId) {
    // Architecture Placeholder: Deducts showroom location balance directly
    return null;
  },

  async handoverOnlineOrder(_orderId, _showroomId, _staffId) {
    // Architecture Placeholder: Marks PACKED -> DELIVERED with zero double-deduction
    return null;
  },

  async getShowroomDayList(_showroomId, _date) {
    // Architecture Placeholder
    return { stock: [], visits: [] };
  }
};
