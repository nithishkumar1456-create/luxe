/**
 * Customer Layout Architecture
 * Wraps customer-facing storefront screens with standard Navbar, Offline Banner, and Footer
 */

import { Navbar } from '../../components/Navbar/index.js';
import { OfflineBanner } from '../../components/common/index.js';

export const CustomerLayout = ({ children, user = null, cartCount = 0, isOffline = false, onLogout }) => {
  return (
    <div className="lvf-customer-layout">
      <OfflineBanner isOffline={isOffline} />
      <Navbar user={user} cartCount={cartCount} onLogout={onLogout} />
      <main className="lvf-customer-main">{children}</main>
      <footer className="lvf-footer">
        <p>&copy; {new Date().getFullYear()} LUXE VASTRA Fashions. All rights reserved.</p>
      </footer>
    </div>
  );
};
