/**
 * Form Wrapper & Form Field Components
 */

export const Form = ({ onSubmit, children, className = '', ...props }) => {
  return (
    <form onSubmit={onSubmit} className={`lvf-form ${className}`} {...props}>
      {children}
    </form>
  );
};

export const FormField = ({ label, id, error, children, required = false }) => {
  return (
    <div className="lvf-form-field">
      {label && (
        <label htmlFor={id} className="lvf-form-label">
          {label} {required && <span aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {error && <span className="lvf-form-error" role="alert">{error}</span>}
    </div>
  );
};
