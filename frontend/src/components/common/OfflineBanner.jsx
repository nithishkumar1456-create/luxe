/**
 * Offline Network Status Banner Component
 * Implements SSOT Section 19: "You appear to be offline."
 */

export const OfflineBanner = ({ isOffline = false }) => {
  if (!isOffline) return null;

  return (
    <div className="lvf-offline-banner" role="status">
      <span>You appear to be offline.</span>
    </div>
  );
};
