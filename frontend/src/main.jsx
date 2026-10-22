/**
 * Application Bootstrap Entry Point
 * React 19.2.x, React DOM 19.2.x, Vite 7.x
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
