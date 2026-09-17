import React from 'react';

// HTML slots preserve the existing row actions and expandable detail rows.
// Only pass markup produced by the application, with escaped user values.
export default function Table({ columns, rowsHtml, className = 'tabela cm-tabela', emptyMessage = 'Nenhum registro encontrado.' }) {
  return (
    <table className={className}>
      <thead><tr>{columns.map((label, index) => <th scope="col" key={index}>{label}</th>)}</tr></thead>
      {rowsHtml?.trim()
        ? <tbody dangerouslySetInnerHTML={{ __html: rowsHtml }} />
        : <tbody><tr><td colSpan={columns.length} className="muted">{emptyMessage}</td></tr></tbody>}
    </table>
  );
}
