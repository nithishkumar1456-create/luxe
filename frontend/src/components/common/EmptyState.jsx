/**
 * Standard Empty State Component
 * Section 7: Enforces document-defined empty copy
 */

export const EmptyState = ({ message = 'No pieces found.', action = null }) => {
  return (
    <div className="lvf-empty-state">
      <p className="lvf-empty-message">{message}</p>
      {action && <div className="lvf-empty-action">{action}</div>}
    </div>
  );
};
