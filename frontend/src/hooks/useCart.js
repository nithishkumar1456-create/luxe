/**
 * Cart Hook
 */

import { useState, useEffect } from 'react';
import { store } from '../store/index.js';

export const useCart = () => {
  const [cartCount, setCartCount] = useState(store.getState().cartCount);

  useEffect(() => {
    const unsubscribe = store.subscribe((state) => {
      setCartCount(state.cartCount);
    });
    return unsubscribe;
  }, []);

  return {
    cartCount,
    setCartCount: (count) => store.setCartCount(count)
  };
};
