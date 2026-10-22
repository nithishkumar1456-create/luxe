/**
 * Centralized Application Routing Architecture
 * Implements SSOT Section 9:
 * - Public catalogue routes
 * - Authenticated customer routes
 * - Protected staff routes with role-based checks
 */

import { Routes, Route, Navigate } from 'react-router';
import { CustomerLayout } from '../layouts/CustomerLayout/index.js';
import { AdminLayout } from '../layouts/AdminLayout/index.js';

// Customer Pages
import { Home } from '../pages/customer/Home.jsx';
import { Collection } from '../pages/customer/Collection.jsx';
import { CategorySearch } from '../pages/customer/CategorySearch.jsx';
import { ProductDetail } from '../pages/customer/ProductDetail.jsx';
import { Wishlist } from '../pages/customer/Wishlist.jsx';
import { Cart } from '../pages/customer/Cart.jsx';
import { Checkout } from '../pages/customer/Checkout.jsx';
import { Confirmation } from '../pages/customer/Confirmation.jsx';
import { Orders, Profile, Addresses, VIPArea } from '../pages/customer/Orders.jsx';

// Auth & Event Guest Public
import { Login } from '../pages/auth/Login.jsx';
import { GuestRegistration } from '../pages/events/EventSetup.jsx';

// Staff & Admin Pages
import { ProductAdmin, OrderAdmin, ReportsAdmin, AuditLogs } from '../pages/admin/ProductAdmin.jsx';
import { ShowroomDay, InStoreSale, OrderHandover } from '../pages/showroom/ShowroomDay.jsx';
import { PieceLink, SKUTrace } from '../pages/connect/PieceLink.jsx';
import { ProductionOrders, QualityInspection } from '../pages/production/ProductionOrders.jsx';
import { InventoryBalances, StockTransfers } from '../pages/inventory/InventoryBalances.jsx';
import { EventSetup, DoorCheckIn, RunOfShow } from '../pages/events/EventSetup.jsx';

import { useAuth } from '../hooks/useAuth.js';
import { useCart } from '../hooks/useCart.js';
import { useOffline } from '../hooks/useOffline.js';

/**
 * Role-Based Route Guard Architecture
 */
const ProtectedStaffRoute = ({ allowedRoles = [], children }) => {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  const userRoles = user?.roles || [];
  const hasAccess = userRoles.some(role => allowedRoles.includes(role));
  if (!hasAccess) return <Navigate to="/" replace />;
  return children;
};

export const AppRoutes = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const isOffline = useOffline();

  return (
    <Routes>
      {/* Public & Customer Routes wrapped in CustomerLayout */}
      <Route
        path="/"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Home />
          </CustomerLayout>
        }
      />
      <Route
        path="/collections/:id"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Collection />
          </CustomerLayout>
        }
      />
      <Route
        path="/search"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <CategorySearch />
          </CustomerLayout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <ProductDetail />
          </CustomerLayout>
        }
      />
      <Route
        path="/login"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Login />
          </CustomerLayout>
        }
      />
      <Route
        path="/invitation/confirm"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <GuestRegistration />
          </CustomerLayout>
        }
      />

      {/* Authenticated Customer Routes */}
      <Route
        path="/wishlist"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Wishlist />
          </CustomerLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Cart />
          </CustomerLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Checkout />
          </CustomerLayout>
        }
      />
      <Route
        path="/orders/confirmation"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Confirmation />
          </CustomerLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Orders />
          </CustomerLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Profile />
          </CustomerLayout>
        }
      />
      <Route
        path="/profile/addresses"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <Addresses />
          </CustomerLayout>
        }
      />
      <Route
        path="/vip"
        element={
          <CustomerLayout user={user} cartCount={cartCount} isOffline={isOffline} onLogout={logout}>
            <VIPArea />
          </CustomerLayout>
        }
      />

      {/* Staff & Admin Routes wrapped in AdminLayout */}
      <Route
        path="/admin/products"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="ADMIN" isOffline={isOffline} onLogout={logout}>
              <ProductAdmin />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'SUPER_ADMIN', 'WAREHOUSE_MANAGER']}>
            <AdminLayout role="ADMIN" isOffline={isOffline} onLogout={logout}>
              <OrderAdmin />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/admin/reports"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'SUPER_ADMIN', 'FINANCE']}>
            <AdminLayout role="ADMIN" isOffline={isOffline} onLogout={logout}>
              <ReportsAdmin />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/admin/audit"
        element={
          <ProtectedStaffRoute allowedRoles={['SUPER_ADMIN']}>
            <AdminLayout role="SUPER_ADMIN" isOffline={isOffline} onLogout={logout}>
              <AuditLogs />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Showroom Routes */}
      <Route
        path="/showroom"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'INVENTORY_MANAGER', 'SUPER_ADMIN']}>
            <AdminLayout role="SHOWROOM" isOffline={isOffline} onLogout={logout}>
              <ShowroomDay />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/showroom/sale"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'INVENTORY_MANAGER']}>
            <AdminLayout role="SHOWROOM" isOffline={isOffline} onLogout={logout}>
              <InStoreSale />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/showroom/handover"
        element={
          <ProtectedStaffRoute allowedRoles={['ADMIN', 'WAREHOUSE_MANAGER']}>
            <AdminLayout role="SHOWROOM" isOffline={isOffline} onLogout={logout}>
              <OrderHandover />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Connect Fashions Routes */}
      <Route
        path="/connect"
        element={
          <ProtectedStaffRoute allowedRoles={['DESIGNER', 'PRODUCTION_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="CONNECT" isOffline={isOffline} onLogout={logout}>
              <PieceLink />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/connect/trace/:productId"
        element={
          <ProtectedStaffRoute
            allowedRoles={[
              'DESIGNER',
              'PRODUCTION_MANAGER',
              'QC_MANAGER',
              'INVENTORY_MANAGER',
              'EVENT_MANAGER',
              'ADMIN',
              'SUPER_ADMIN'
            ]}
          >
            <AdminLayout role="CONNECT" isOffline={isOffline} onLogout={logout}>
              <SKUTrace />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Production & QC Routes */}
      <Route
        path="/production"
        element={
          <ProtectedStaffRoute allowedRoles={['PRODUCTION_MANAGER', 'SUPER_ADMIN']}>
            <AdminLayout role="PRODUCTION" isOffline={isOffline} onLogout={logout}>
              <ProductionOrders />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/quality"
        element={
          <ProtectedStaffRoute allowedRoles={['QC_MANAGER', 'SUPER_ADMIN']}>
            <AdminLayout role="QC" isOffline={isOffline} onLogout={logout}>
              <QualityInspection />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Inventory Routes */}
      <Route
        path="/inventory"
        element={
          <ProtectedStaffRoute allowedRoles={['INVENTORY_MANAGER', 'WAREHOUSE_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="INVENTORY" isOffline={isOffline} onLogout={logout}>
              <InventoryBalances />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/inventory/transfers"
        element={
          <ProtectedStaffRoute allowedRoles={['INVENTORY_MANAGER', 'WAREHOUSE_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="INVENTORY" isOffline={isOffline} onLogout={logout}>
              <StockTransfers />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Events Routes (Grand Couture Week) */}
      <Route
        path="/events"
        element={
          <ProtectedStaffRoute allowedRoles={['EVENT_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="EVENTS" isOffline={isOffline} onLogout={logout}>
              <EventSetup />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/events/:id/door-checkin"
        element={
          <ProtectedStaffRoute allowedRoles={['EVENT_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="EVENTS" isOffline={isOffline} onLogout={logout}>
              <DoorCheckIn />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />
      <Route
        path="/events/:id/run-of-show"
        element={
          <ProtectedStaffRoute allowedRoles={['EVENT_MANAGER', 'ADMIN', 'SUPER_ADMIN']}>
            <AdminLayout role="EVENTS" isOffline={isOffline} onLogout={logout}>
              <RunOfShow />
            </AdminLayout>
          </ProtectedStaffRoute>
        }
      />

      {/* Fallback 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
