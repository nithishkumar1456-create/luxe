/**
 * Showroom Screens Architecture (Section 6.2 & 7)
 * SCR-STORE-001 (Showroom registration)
 * SCR-STORE-003 (Private client visits)
 * SCR-STORE-004 (In-store sale)
 * SCR-STORE-005 (Handover online order)
 * SCR-STORE-006 (Showroom day floor stock & visits)
 */

export const ShowroomDay = () => {
  return (
    <div className="lvf-admin-page">
      <h1>Showroom Floor & Day Schedule</h1>
      {/* Architecture Placeholder: Showroom floor balances & client appointments */}
    </div>
  );
};

export const InStoreSale = () => {
  return (
    <div className="lvf-admin-page">
      <h1>Showroom Private Sale</h1>
      {/* Architecture Placeholder: Tablet in-store client checkout */}
    </div>
  );
};

export const OrderHandover = () => {
  return (
    <div className="lvf-admin-page">
      <h1>Online Order Handover</h1>
      {/* Architecture Placeholder: Hand over website orders at showroom desk */}
    </div>
  );
};
