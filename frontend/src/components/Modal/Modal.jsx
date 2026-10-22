/**
 * Modal Dialog Component
 */

export const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="lvf-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="lvf-modal-content">
        <div className="lvf-modal-header">
          <h2 id="modal-title">{title}</h2>
          <button onClick={onClose} aria-label="Close dialog">×</button>
        </div>
        <div className="lvf-modal-body">{children}</div>
      </div>
    </div>
  );
};
