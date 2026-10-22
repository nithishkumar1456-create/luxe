/**
 * Authentication Hook
 */

import { useState, useEffect } from 'react';
import { tokenStorage } from '../utils/tokenStorage.js';
import { store } from '../store/index.js';

export const useAuth = () => {
  const [user, setUser] = useState(tokenStorage.getUser());

  useEffect(() => {
    const unsubscribe = store.subscribe((state) => {
      setUser(state.session);
    });
    return unsubscribe;
  }, []);

  const logout = () => {
    tokenStorage.clearToken();
    store.setSession(null);
    window.location.href = '/login';
  };

  return {
    user,
    isAuthenticated: Boolean(user),
    logout
  };
};
