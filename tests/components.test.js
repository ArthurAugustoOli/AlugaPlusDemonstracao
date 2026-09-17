import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

test('shared components preserve routes, reports, forms and payment actions', async () => {
  const server = await createServer({ server: { middlewareMode: true, ws: false }, appType: 'custom' });
  let dom;
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    dom = new JSDOM(`<link id="route-styles">${renderToStaticMarkup(createElement(App))}`, { url: 'http://localhost:5010' });
    const { window } = dom;
    const errors = [];
    window.addEventListener('error', (event) => errors.push(event.error));
    for (const key of ['window', 'document', 'location', 'localStorage']) globalThis[key] = key === 'window' ? window : window[key];
    await server.ssrLoadModule('/src/legacyApp.js');
    const doc = window.document;
    const route = (name) => {
      window.history.replaceState(null, '', `#${name}`);
      window.dispatchEvent(new window.HashChangeEvent('hashchange'));
    };
    const click = (selector) => {
      const button = doc.querySelector(selector);
      assert.ok(button, selector);
      button.click();
    };
    for (const name of ['inicio', 'controle', 'cobrancas', 'imoveis', 'inquilinos', 'contratos', 'relatorios', 'documentos', 'configuracoes']) {
      route(name);
      assert.ok(doc.querySelector('#app-view').textContent.trim(), name);
      assert.equal(doc.querySelector('.nav-item.active').dataset.route, name);
      for (const table of doc.querySelectorAll('table')) {
        assert.ok(table.querySelector('thead th[scope="col"]'), name);
        assert.ok(table.querySelector('tbody tr'), name);
      }
    }
    route('relatorios');
    for (const name of ['geral', 'inquilino', 'imovel', 'contrato']) {
      click(`[data-report="${name}"]`);
      assert.equal(doc.querySelector('.rl-tipo-tab.active').dataset.report, name);
      assert.equal(doc.querySelectorAll('thead th').length, name === 'imovel' ? 8 : 12);
      assert.equal(doc.querySelectorAll('.cm-kpi-card').length, 4);
    }
    for (const name of ['imoveis', 'inquilinos', 'contratos', 'cobrancas']) {
      route(name);
      click('[data-action="open-form"]');
      assert.ok(doc.querySelector('#modal-content form[data-demo-submit] input'));
      click('[data-action="close-modal"]');
    }
    route('cobrancas');
    click('[data-action="toggle-detail"]');
    assert.ok(doc.querySelector('tr.show'));
    click('[data-action="open-payment"]');
    assert.ok(doc.querySelector('form[data-payment-form]'));
    const initial = doc.querySelectorAll('.pagamento-item').length;
    click('[data-action="add-payment-row"]');
    assert.equal(doc.querySelectorAll('.pagamento-item').length, initial + 1);
    click('[data-action="remove-payment-row"]');
    assert.equal(doc.querySelectorAll('.pagamento-item').length, initial);
    route('controle');
    for (let i = 0; i < 24; i++) click('[data-action="month-next"]');
    assert.match(doc.querySelector('table tbody').textContent, /Nenhuma cobrança encontrada/);
    assert.equal(doc.querySelector('table tbody td').colSpan, 8);
    assert.deepEqual(errors, []);
  } finally {
    dom?.window.close();
    for (const key of ['window', 'document', 'location', 'localStorage']) delete globalThis[key];
    await server.close();
  }
});
