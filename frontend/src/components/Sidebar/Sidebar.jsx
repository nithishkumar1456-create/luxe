/**
 * Staff / Admin Sidebar Navigation Component
 */

export const Sidebar = ({ role = 'ADMIN', onLogout }) => {
  return (
    <aside className="lvf-sidebar">
      <div className="lvf-sidebar-header">
        <a href="/">LUXE VASTRA</a>
        <span className="lvf-sidebar-badge">{role}</span>
      </div>
      <nav className="lvf-sidebar-nav">
        <a href="/admin/products">Catalogue</a>
        <a href="/admin/orders">Orders</a>
        <a href="/showroom">Showroom</a>
        <a href="/connect">Connect Fashions</a>
        <a href="/production">Production</a>
        <a href="/inventory">Inventory</a>
        <a href="/events">Events</a>
        <a href="/admin/reports">Reports</a>
      </nav>
      <div className="lvf-sidebar-footer">
        <button onClick={onLogout} className="lvf-button-logout">Logout</button>
      </div>
    </aside>
  );
};
