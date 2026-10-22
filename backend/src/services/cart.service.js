/**
 * Cart & Wishlist Services (FN-ECOM-005, FN-ECOM-006)
 * Business rules: BR-ECOM-004, BR-ECOM-005 (no stock deduction in cart/wishlist)
 */

export const cartService = {
  async getCart(_customerId) {
    // Architecture Placeholder: Refetch lines with authoritative server prices & allocation
    return { items: [], total: 0 };
  },

  async addItem(_customerId, _data) {
    // Architecture Placeholder
    return null;
  },

  async updateItemQuantity(_customerId, _itemId, _quantity) {
    // Architecture Placeholder
    return null;
  },

  async removeItem(_customerId, _itemId) {
    // Architecture Placeholder
    return null;
  }
};

export const wishlistService = {
  async getWishlist(_customerId) {
    // Architecture Placeholder
    return { items: [] };
  },

  async addItem(_customerId, _productId) {
    // Architecture Placeholder
    return null;
  },

  async removeItem(_customerId, _productId) {
    // Architecture Placeholder
    return null;
  }
};
