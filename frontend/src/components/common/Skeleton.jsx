/**
 * Loading Skeleton Component
 */

export const Skeleton = ({ width = '100%', height = '20px', className = '' }) => {
  return (
    <div
      className={`lvf-skeleton ${className}`}
      style={{ width, height }}
      aria-busy="true"
      aria-label="Loading content..."
    />
  );
};
