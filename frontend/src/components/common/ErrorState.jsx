/**
 * Error State Component with Retry Action
 */

export const ErrorState = ({ message = 'Something went wrong.', onRetry = null }) => {
  return (
    <div className="lvf-error-state" role="alert">
      <p className="lvf-error-message">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="lvf-button lvf-button--secondary">
          Retry
        </button>
      )}
    </div>
  );
};
