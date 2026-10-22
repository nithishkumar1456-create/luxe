/**
 * Lightweight Centralized State Store Architecture
 * SSOT Section 9: Manages session and cart count in store.
 * Authoritative prices and cart body are always refetched from the server.
 */

class Store {
  constructor() {
    this.state = {
      session: null,
      cartCount: 0
    };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setSession(user) {
    this.state = { ...this.state, session: user };
    this.notify();
  }

  setCartCount(count) {
    this.state = { ...this.state, cartCount: count };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}

export const store = new Store();
