/**
 * Data Table Component
 */

export const Table = ({ columns = [], data = [], keyField = 'id' }) => {
  return (
    <table className="lvf-table">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={col.key || idx}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[keyField]}>
            {columns.map((col, idx) => (
              <td key={col.key || idx}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
