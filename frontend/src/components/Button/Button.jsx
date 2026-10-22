/**
 * Standard Design System Button Component
 */

export const Button = ({ children, variant = 'primary', disabled = false, onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`lvf-button lvf-button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};
