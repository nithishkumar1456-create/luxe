/**
 * Customer Navigation Bar Component
 * SCR-ECOM-001: Logo, search, account, cart count
 */

export const Navbar = ({ cartCount = 0, user = null, onLogout }) => {
  return (
    <header className="lvf-navbar">
      <div className="lvf-navbar-brand">
        <a href="/">LUXE VASTRA</a>
      </div>
      <nav className="lvf-navbar-links">
        <a href="/collections">Collections</a>
        <a href="/search">Search</a>
      </nav>
      <div className="lvf-navbar-actions">
        {user ? (
          <>
            <a href="/profile">{user.firstName || 'Account'}</a>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <a href="/login">Sign In</a>
        )}
        <a href="/cart" className="lvf-cart-link">
          Cart ({cartCount})
        </a>
      </div>
    </header>
  );
};
