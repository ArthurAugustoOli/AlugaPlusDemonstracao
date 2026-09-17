import React from 'react';
import Table from './Table.jsx';

export default function Report({ type, title, subtitle, tabs, metricsHtml, filtersHtml, grouped, total, formatMoney, columns, rowsHtml, count }) {
  return (
    <div className="rl-page cm-page">
      <div className="lp-header">
        <div><h1 className="lp-title">{title}</h1><div className="lp-subtitle">{subtitle}</div></div>
        <div className="rl-export-btns">
          {['CSV', 'XLSX', 'PDF'].map((format, index) => <button key={format} type="button" className={`rl-btn-export${format === 'PDF' ? ' cm-btn-gerar' : ''}`} data-action={format === 'PDF' ? 'open-pdf-options' : 'toast'} data-message={format === 'PDF' ? undefined : `Arquivo ${format} gerado.`}><span className="material-symbols-outlined">{['table_view', 'grid_on', 'picture_as_pdf'][index]}</span>{format}</button>)}
        </div>
      </div>
      <div className="rl-tipo-tabs">{tabs.map((tab) => <button key={tab.key} type="button" className={`rl-tipo-tab ${type === tab.key ? 'active' : ''}`} data-action="report-tab" data-report={tab.key}><span className="material-symbols-outlined">{tab.icon}</span>{tab.label}</button>)}</div>
      <div className="cm-kpi-grid" dangerouslySetInnerHTML={{ __html: metricsHtml }} />
      <div dangerouslySetInnerHTML={{ __html: filtersHtml }} />
      <div className="card">
        <div className="cm-table-head"><span className="cm-table-title"><span className="material-symbols-outlined">bar_chart</span>Resumo agrupado</span><span className="listagem-meta">Agrupado por <b>{type === 'imovel' ? 'ocupação' : 'mês'}</b></span></div>
        <div className="card-body report-chart">{grouped.map((group) => <div className="report-bar-row" key={group.label}><span>{group.label}</span><div className="report-bar"><span style={{ width: `${Math.min(100, Math.round((group.value / Math.max(1, total)) * 100))}%` }} /></div><strong>{formatMoney(group.value)}</strong></div>)}</div>
      </div>
      <div className="card cm-table-card">
        <div className="cm-table-head"><span className="cm-table-title"><span className="material-symbols-outlined">list_alt</span>Detalhado</span><span className="listagem-meta">{count} registro(s)</span></div>
        <div className="table-wrap"><Table columns={columns} rowsHtml={rowsHtml} /></div>
      </div>
    </div>
  );
}
