import { form } from './renderMarkup.js';

export function statusBadge(status) {
    const map = {
      ATRASADO: ['b-atrasado', 'Atrasado'],
      EM_ABERTO: ['b-aberto', 'Em aberto'],
      PARCIAL: ['b-parcial', 'Parcial'],
      PAGO: ['b-pago', 'Pago'],
      FUTURA: ['b-futura', 'Futura'],
      ATIVO: ['b-disponivel', 'Ativo'],
      INATIVO: ['b-futura', 'Inativo'],
      ALUGADO: ['b-alugado', 'Alugado'],
      DISPONIVEL: ['b-disponivel', 'Disponível']
    };
    const [cls, label] = map[status] || ['b-futura', status];
    return `<span class="badge ${cls}">${label}</span>`;
  }

export function kpi(label, value, sub, icon, color) {
    return `
      <div class="cm-kpi-card">
        <div class="cm-kpi-top">
          <span class="cm-kpi-label">${label}</span>
          <span class="cm-kpi-ico cm-ico-${color}"><span class="material-symbols-outlined">${icon}</span></span>
        </div>
        <div class="cm-kpi-value">${value}</div>
        <div class="cm-kpi-sub">${sub}</div>
      </div>
    `;
  }

export function actionButton(label, icon, action, attrs = '') {
    return `<button type="button" class="cm-btn-editar" data-action="${action}" ${attrs}><span class="material-symbols-outlined">${icon}</span>${label}</button>`;
  }

export function miniIcon(icon, title, action, attrs = '') {
    return `<button type="button" class="mini-icon-btn" title="${title}" aria-label="${title}" data-action="${action}" ${attrs}><span class="material-symbols-outlined">${icon}</span></button>`;
  }

export function filtersCard(content, title = 'Filtros') {
    return `
      <details class="card cm-filters" open>
        <summary><span class="material-symbols-outlined">tune</span>${title}</summary>
        <div class="cm-filters-body">${form({ className: "form", payment: false, content: `${content}` })}</div>
      </details>
    `;
  }
