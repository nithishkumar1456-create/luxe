/**
 * Admin & Staff Layout Architecture
 * Wraps staff portals (Admin, Designer, Inventory, Production, QC, Events) with Sidebar & Header
 */

import { Sidebar } from '../../components/Sidebar/index.js';
import { OfflineBanner } from '../../components/common/index.js';

export const AdminLayout = ({ children, role = 'ADMIN', isOffline = false, onLogout }) => {
  return (
    <div className="lvf-admin-layout">
      <OfflineBanner isOffline={isOffline} />
      <div className="lvf-admin-shell">
        <Sidebar role={role} onLogout={onLogout} />
        <main className="lvf-admin-main">{children}</main>
      </div>
    </div>
  );
};
