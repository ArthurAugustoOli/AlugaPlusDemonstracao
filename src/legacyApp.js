import { table, form, report } from './components/renderMarkup.js';
import { statusBadge, kpi, actionButton, miniIcon, filtersCard } from './components/ui.js';

(function () {
  'use strict';

  const demoDate = new Date(2026, 8, 16);
  const state = {
    route: 'inicio',
    reportType: 'geral',
    configTab: 'usuarios',
    docTab: 'contrato',
    month: 9,
    year: 2026,
    openMenu: null,
    openMenuButton: null
  };

  const meses = [
    '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const demo = {
    imoveis: [
      {
        id: 1,
        apelido: 'Casa Centro',
        endereco: 'Rua Curitiba, 123 - Centro, Belo Horizonte/MG',
        aluguel: 1500,
        taxas: 180,
        iptu: 95,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-102884',
        cemig: 'CEM-778120',
        emUso: true,
        inquilinoId: 1,
        contratoId: 101
      },
      {
        id: 2,
        apelido: 'Apto Funcionários',
        endereco: 'Rua Aimorés, 55 - Funcionários, Belo Horizonte/MG',
        aluguel: 2200,
        taxas: 420,
        iptu: 160,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-552910',
        cemig: 'CEM-238901',
        emUso: true,
        inquilinoId: 2,
        contratoId: 102
      },
      {
        id: 3,
        apelido: 'Loja Savassi',
        endereco: 'Av. do Contorno, 3000 - Savassi, Belo Horizonte/MG',
        aluguel: 4800,
        taxas: 720,
        iptu: 320,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-998201',
        cemig: 'CEM-112345',
        emUso: true,
        inquilinoId: 3,
        contratoId: 103
      },
      {
        id: 4,
        apelido: 'Kitnet Nova Suíça',
        endereco: 'Rua Oeste, 45 - Nova Suíça, Belo Horizonte/MG',
        aluguel: 980,
        taxas: 90,
        iptu: 55,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-771400',
        cemig: 'CEM-552301',
        emUso: false,
        inquilinoId: null,
        contratoId: null
      },
      {
        id: 5,
        apelido: 'Casa Barreiro',
        endereco: 'Rua Desembargador Ribeiro da Luz, 88 - Barreiro, Belo Horizonte/MG',
        aluguel: 1350,
        taxas: 110,
        iptu: 60,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-330900',
        cemig: 'CEM-809111',
        emUso: true,
        inquilinoId: 4,
        contratoId: 104
      },
      {
        id: 6,
        apelido: 'Galpão Contagem',
        endereco: 'Av. Cardeal Eugênio Pacelli, 1270 - Cidade Industrial, Contagem/MG',
        aluguel: 6200,
        taxas: 850,
        iptu: 510,
        agua: 0,
        luz: 0,
        consertos: 0,
        chaveExtra: 0,
        outros: 0,
        outros2: 0,
        copasa: 'COP-110245',
        cemig: 'CEM-990120',
        emUso: false,
        inquilinoId: null,
        contratoId: null
      }
    ],
    inquilinos: [
      { id: 1, nome: 'Inquilino Exemplo 01', cpf: '12345678909', telefone: '31988887777', nomePix: 'INQUILINO EXEMPLO 01', observacoes: 'Prefere receber lembretes por WhatsApp no fim da tarde.' },
      { id: 2, nome: 'Inquilino Exemplo 02', cpf: '09544576620', telefone: '31997776666', nomePix: 'INQUILINO EXEMPLO 02', observacoes: 'Contrato renovado em julho.' },
      { id: 3, nome: 'Empresa Exemplo 03', cpf: '18833455591', telefone: '31991234567', nomePix: 'EMPRESA EXEMPLO 03', observacoes: 'Comércio abre de segunda a sábado.' },
      { id: 4, nome: 'Inquilino Exemplo 04', cpf: '07211233310', telefone: '31995554444', nomePix: 'INQUILINO EXEMPLO 04', observacoes: 'Solicitou recibo mensal em PDF.' },
      { id: 5, nome: 'Inquilino Exemplo 05', cpf: '22100988740', telefone: '31990001122', nomePix: '', observacoes: 'Cadastro sem contrato ativo.' }
    ],
    contratos: [
      {
        id: 101,
        imovelId: 1,
        inquilinoId: 1,
        ativo: true,
        diaPagamento: 5,
        mesReajuste: 7,
        inicio: '2025-07-01',
        fim: '2026-10-31',
        multa: 2,
        juros: 1,
        honorarios: 10,
        honorariosApos: 15,
        rescindirApos: 60,
        rescindirParcelas: 2,
        seguro: 0,
        deposito: 1500,
        observacoes: 'Contrato residencial com depósito garantia.'
      },
      {
        id: 102,
        imovelId: 2,
        inquilinoId: 2,
        ativo: true,
        diaPagamento: 10,
        mesReajuste: 8,
        inicio: '2026-01-10',
        fim: '2028-01-09',
        multa: 2,
        juros: 1,
        honorarios: 10,
        honorariosApos: 15,
        rescindirApos: 60,
        rescindirParcelas: 2,
        seguro: 260,
        deposito: 0,
        observacoes: 'Seguro fiança vence junto da renovação anual.'
      },
      {
        id: 103,
        imovelId: 3,
        inquilinoId: 3,
        ativo: true,
        diaPagamento: 12,
        mesReajuste: 9,
        inicio: '2024-09-12',
        fim: '2027-09-11',
        multa: 2,
        juros: 1.2,
        honorarios: 12,
        honorariosApos: 10,
        rescindirApos: 45,
        rescindirParcelas: 2,
        seguro: 0,
        deposito: 9600,
        observacoes: 'Contrato comercial com índice reajustado em setembro.'
      },
      {
        id: 104,
        imovelId: 5,
        inquilinoId: 4,
        ativo: true,
        diaPagamento: 15,
        mesReajuste: 3,
        inicio: '2026-03-15',
        fim: '2027-03-14',
        multa: 2,
        juros: 1,
        honorarios: 10,
        honorariosApos: 15,
        rescindirApos: 60,
        rescindirParcelas: 2,
        seguro: 0,
        deposito: 1350,
        observacoes: 'A locatária usa desconto temporário nos três primeiros meses.'
      },
      {
        id: 99,
        imovelId: 4,
        inquilinoId: 5,
        ativo: false,
        diaPagamento: 7,
        mesReajuste: 2,
        inicio: '2024-02-07',
        fim: '2025-02-06',
        multa: 2,
        juros: 1,
        honorarios: 10,
        honorariosApos: 15,
        rescindirApos: 60,
        rescindirParcelas: 2,
        seguro: 0,
        deposito: 980,
        observacoes: 'Encerrado com termo de entrega de chaves.'
      }
    ],
    cobrancas: [
      { id: 5001, contratoId: 101, ano: 2026, mes: 9, vencimento: '2026-09-05', status: 'ATRASADO', total: 1775, recebido: 0, forma: '', recebimento: '', obs: 'Aguardando retorno do inquilino.', multa: 35.5, juros: 5.92, correcao: 0, honorarios: 0 },
      { id: 5002, contratoId: 102, ano: 2026, mes: 9, vencimento: '2026-09-10', status: 'PAGO', total: 2780, recebido: 2780, forma: 'PIX', recebimento: '2026-09-10', obs: 'Pago integralmente por Pix.', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 5003, contratoId: 103, ano: 2026, mes: 9, vencimento: '2026-09-12', status: 'PARCIAL', total: 5840, recebido: 3000, forma: 'PIX', recebimento: '2026-09-13', obs: 'Entrada recebida, saldo combinado para o dia 20.', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 5004, contratoId: 104, ano: 2026, mes: 9, vencimento: '2026-09-15', status: 'EM_ABERTO', total: 1520, recebido: 0, forma: '', recebimento: '', obs: '', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 4998, contratoId: 101, ano: 2026, mes: 8, vencimento: '2026-08-05', status: 'PAGO', total: 1775, recebido: 1775, forma: 'DINHEIRO', recebimento: '2026-08-06', obs: 'Recibo entregue.', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 4999, contratoId: 103, ano: 2026, mes: 8, vencimento: '2026-08-12', status: 'PAGO', total: 5840, recebido: 5840, forma: 'CARTAO_CREDITO', recebimento: '2026-08-12', obs: '', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 5010, contratoId: 101, ano: 2026, mes: 10, vencimento: '2026-10-05', status: 'FUTURA', total: 1775, recebido: 0, forma: '', recebimento: '', obs: '', multa: 0, juros: 0, correcao: 0, honorarios: 0 },
      { id: 5011, contratoId: 102, ano: 2026, mes: 10, vencimento: '2026-10-10', status: 'FUTURA', total: 2780, recebido: 0, forma: '', recebimento: '', obs: '', multa: 0, juros: 0, correcao: 0, honorarios: 0 }
    ],
    usuarios: [
      { id: 1, usuario: 'admin', ativo: true, criado: '2025-01-12 08:30', ultimo: '2026-09-16 08:14' },
      { id: 2, usuario: 'financeiro', ativo: true, criado: '2025-05-09 14:22', ultimo: '2026-09-15 17:41' },
      { id: 3, usuario: 'atendimento', ativo: false, criado: '2025-11-20 09:10', ultimo: '2026-08-28 10:02' }
    ],
    logs: [
      { data: '2026-09-16 08:14', usuario: 'admin', acao: 'LOGIN', detalhes: 'Acesso iniciado no sistema.' },
      { data: '2026-09-16 08:20', usuario: 'financeiro', acao: 'BAIXA_COBRANCA', detalhes: 'Pagamento registrado na cobrança #5002.' },
      { data: '2026-09-15 17:41', usuario: 'financeiro', acao: 'GERAR_RELATORIO', detalhes: 'Relatório geral exportado em XLSX.' },
      { data: '2026-09-15 16:03', usuario: 'admin', acao: 'EDITAR_CONTRATO', detalhes: 'Reajuste revisado no contrato #103.' },
      { data: '2026-09-14 10:55', usuario: 'atendimento', acao: 'CRIAR_INQUILINO', detalhes: 'Cadastro de Inquilino Exemplo 05 criado.' }
    ],
    atividade: [6, 9, 4, 13, 18, 10, 7],
    configuracoes: {
      nomeEmpresa: 'Imobiliária Exemplo',
      alertaVencimento: 7,
      alertaContratos: 60,
      mesesPreGeracao: 6,
      multaPadrao: 2,
      jurosPadrao: 1
    }
  };

  const helps = {
    inicio: {
      title: 'Início',
      subtitle: 'Resumo operacional do mês e atalhos para as rotinas principais.',
      bullets: [
        ['dashboard', 'Mostra o previsto, recebido, saldo em aberto e atrasos gerais.'],
        ['warning', 'Destaca cobranças atrasadas, próximos vencimentos e contratos perto do fim.'],
        ['grid_view', 'Os atalhos levam para as partes usadas no atendimento diário.']
      ]
    },
    controle: {
      title: 'Controle Mensal',
      subtitle: 'Acompanhamento do mês por competência.',
      bullets: [
        ['calendar_month', 'Permite navegar entre meses e acompanhar quanto já foi recebido.'],
        ['receipt_long', 'Lista as cobranças do período por imóvel, inquilino, vencimento e status.'],
        ['payments', 'O botão Dar Baixa registra pagamentos, parcelas e observações.']
      ]
    },
    cobrancas: {
      title: 'Cobranças',
      subtitle: 'Central de cobrança rápida para atrasados, vencendo e pagamentos.',
      bullets: [
        ['warning', 'Separa quem está devendo e quem vence nos próximos dias.'],
        ['chat', 'A ação de WhatsApp prepara o contato com o inquilino.'],
        ['receipt', 'A tela permite baixa, recibo, histórico e consulta da composição da cobrança.']
      ]
    },
    imoveis: {
      title: 'Imóveis',
      subtitle: 'Cadastro patrimonial e valores base usados nos contratos.',
      bullets: [
        ['apartment', 'Cada imóvel guarda endereço, apelido, identificadores e valores mensais.'],
        ['key', 'O status muda conforme existe contrato ativo vinculado ao imóvel.'],
        ['unfold_more', 'A seta abre detalhes como Copasa, Cemig, IPTU e contrato.']
      ]
    },
    inquilinos: {
      title: 'Inquilinos',
      subtitle: 'Cadastro de locatários, contato e dados de Pix.',
      bullets: [
        ['group', 'Centraliza nome, CPF, telefone, Pix e observações.'],
        ['home', 'Mostra o imóvel e o contrato vinculados ao inquilino.'],
        ['chat', 'O atalho de WhatsApp ajuda na cobrança e no relacionamento.']
      ]
    },
    contratos: {
      title: 'Contratos',
      subtitle: 'Vínculo entre imóvel, inquilino, regras de pagamento e documentos.',
      bullets: [
        ['description', 'Mostra vigência, dia de pagamento, reajuste, multas e garantias.'],
        ['trending_up', 'Sinaliza contratos vencendo e reajustes do mês.'],
        ['more_vert', 'O menu de ações abre descontos, reajustes e geração de documentos.']
      ]
    },
    relatorios: {
      title: 'Relatórios',
      subtitle: 'Consulta financeira por período, status, imóvel, inquilino ou contrato.',
      bullets: [
        ['analytics', 'Agrupa resultados por mês, status, forma de pagamento e vínculos.'],
        ['table_view', 'Os resultados podem ser exportados em CSV, XLSX e PDF.'],
        ['picture_as_pdf', 'O PDF permite escolher quais dados aparecem no cabeçalho.']
      ]
    },
    documentos: {
      title: 'Documentos',
      subtitle: 'Modelos editáveis com prévia antes da impressão.',
      bullets: [
        ['contract', 'Gera contrato de locação usando os dados do contrato cadastrado.'],
        ['warning', 'Também reúne carta de despejo, termo de chaves e vistoria.'],
        ['print', 'A prévia pode ser impressa ou salva como PDF pelo navegador.']
      ]
    },
    configuracoes: {
      title: 'Configurações',
      subtitle: 'Usuários, auditoria e preferências gerais do sistema.',
      bullets: [
        ['person', 'Gerencia acessos e status dos usuários.'],
        ['list_alt', 'Exibe logs de ações importantes para auditoria.'],
        ['settings', 'Define dias de alerta, pré-geração e padrões de cobrança.']
      ]
    }
  };

  const routeTitles = {
    inicio: 'Início',
    controle: 'Controle Mensal',
    cobrancas: 'Cobranças',
    imoveis: 'Imóveis',
    inquilinos: 'Inquilinos',
    contratos: 'Contratos',
    relatorios: 'Relatórios',
    documentos: 'Documentos',
    configuracoes: 'Configurações'
  };

  const view = document.getElementById('app-view');
  const modalRoot = document.getElementById('modal-root');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalContent = document.getElementById('modal-content');
  const modalBox = modalRoot.querySelector('.demo-modal-box');
  const toastStack = document.getElementById('toast-stack');

  function money(value) {
    return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function dateBR(value) {
    if (!value) return '-';
    const parts = String(value).slice(0, 10).split('-');
    if (parts.length !== 3) return value;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  function refBR(item) {
    return `${String(item.mes).padStart(2, '0')}/${item.ano}`;
  }

  function escapeHTML(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function digits(value) {
    return String(value || '').replace(/\D+/g, '');
  }

  function cpfBR(value) {
    const v = digits(value).padEnd(11, '0').slice(0, 11);
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
  }

  function phoneBR(value) {
    const v = digits(value);
    if (v.length < 10) return value || '-';
    if (v.length === 10) return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
    return `(${v.slice(0, 2)}) ${v.slice(2, 3)} ${v.slice(3, 7)}-${v.slice(7, 11)}`;
  }

  function initials(name) {
    const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    return ((parts[0] || '-').slice(0, 1) + (parts[1] || '').slice(0, 1)).toUpperCase();
  }

  function colorFor(text) {
    const colors = ['#7c3aed', '#2563eb', '#059669', '#dc2626', '#d97706', '#0891b2', '#be185d', '#0f766e'];
    let hash = 0;
    String(text || '').split('').forEach((char) => { hash = ((hash << 5) - hash) + char.charCodeAt(0); });
    return colors[Math.abs(hash) % colors.length];
  }

  function imovel(id) {
    return demo.imoveis.find((item) => item.id === Number(id));
  }

  function inquilino(id) {
    return demo.inquilinos.find((item) => item.id === Number(id));
  }

  function contrato(id) {
    return demo.contratos.find((item) => item.id === Number(id));
  }

  function contratoImovel(ct) {
    return imovel(ct.imovelId) || {};
  }

  function contratoInquilino(ct) {
    return inquilino(ct.inquilinoId) || {};
  }

  function chargeContrato(cobranca) {
    return contrato(cobranca.contratoId) || {};
  }

  function chargeImovel(cobranca) {
    return contratoImovel(chargeContrato(cobranca));
  }

  function chargeInquilino(cobranca) {
    return contratoInquilino(chargeContrato(cobranca));
  }

  function saldo(cobranca) {
    return Math.max(0, Number(cobranca.total || 0) - Number(cobranca.recebido || 0));
  }

  function daysBetween(a, b) {
    const start = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const end = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((end - start) / 86400000);
  }

  function daysFromToday(date) {
    const parts = String(date).split('-').map(Number);
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return daysBetween(demoDate, d);
  }





  function monthlyCharges() {
    return demo.cobrancas.filter((c) => c.ano === state.year && c.mes === state.month);
  }

  function chargeComposition(c) {
    const ct = chargeContrato(c);
    const im = contratoImovel(ct);
    const aluguel = im.aluguel || 0;
    const taxas = im.taxas || 0;
    const iptu = im.iptu || 0;
    const seguro = ct.seguro || 0;
    const encargos = (c.multa || 0) + (c.juros || 0) + (c.correcao || 0) + (c.honorarios || 0);
    return { aluguel, taxas, iptu, seguro, encargos };
  }

  function chargeRows(charges, options = {}) {
    const showRef = options.showRef !== false;
    return charges.map((c) => {
      const ct = chargeContrato(c);
      const im = contratoImovel(ct);
      const iq = contratoInquilino(ct);
      const days = daysFromToday(c.vencimento);
      const atrasoTxt = c.status === 'ATRASADO' ? `<span class="cm-venc-atraso danger">+${Math.abs(days)} dias</span>` : '';
      const rowClass = c.status === 'ATRASADO' ? 'tr-highlight-atrasado' : c.status === 'PARCIAL' ? 'tr-highlight-parcial' : '';
      const detailsId = `cobranca-details-${c.id}-${options.context || 'x'}`;
      return `
        <tr class="${rowClass}" data-client-row>
          ${options.expand ? `
            <td class="expand-cell">
              <button type="button" class="btn-expand" data-action="toggle-detail" data-target="${detailsId}" aria-expanded="false" title="Expandir cobrança">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </td>` : ''}
          <td class="cell-main">
            <div class="cm-imovel-cell">
              <a class="detail-link cm-imovel-nome" href="#imoveis">${escapeHTML(im.apelido || '-')}</a>
              <span class="cm-imovel-end">${escapeHTML(im.endereco || '-')}</span>
            </div>
          </td>
          <td>
            <div class="cm-inq-cell">
              <div class="cm-avatar" style="background:${colorFor(iq.nome)}">${initials(iq.nome)}</div>
              <a class="detail-link" href="#inquilinos">${escapeHTML(iq.nome || '-')}</a>
            </div>
          </td>
          ${showRef ? `<td>${refBR(c)}</td>` : ''}
          <td>
            <div>${dateBR(c.vencimento)}</div>
            ${atrasoTxt}
          </td>
          <td>${money(c.total)}</td>
          <td>${money(saldo(c))}</td>
          <td>${statusBadge(c.status)}</td>
          <td>
            <div class="cm-acoes">
              ${c.status !== 'PAGO' ? actionButton('Dar Baixa', 'payments', 'open-payment', `data-id="${c.id}"`) : actionButton('Recibo', 'receipt_long', 'open-receipt', `data-id="${c.id}"`)}
              ${miniIcon('chat', 'WhatsApp', 'whatsapp', `data-id="${c.id}"`)}
              <div class="row-menu-wrap">
                <button type="button" class="btn-row-menu" data-action="toggle-menu" data-menu="menu-cobranca-${c.id}-${options.context || 'x'}" aria-label="Mais ações">
                  <span class="material-symbols-outlined">more_vert</span>
                </button>
                <div class="row-menu" id="menu-cobranca-${c.id}-${options.context || 'x'}">
                  <button type="button" class="menu-action" data-action="open-payment" data-id="${c.id}"><span class="menu-ico">R$</span>Registrar pagamento</button>
                  <button type="button" class="menu-action" data-action="open-receipt" data-id="${c.id}"><span class="menu-ico">PDF</span>Ver recibo</button>
                  <button type="button" class="menu-action" data-action="open-form" data-form="cobranca"><span class="menu-ico">ED</span>Editar cobrança</button>
                  <button type="button" class="menu-action" data-action="toast" data-message="Cobrança excluída."><span class="menu-ico">DEL</span>Excluir cobrança</button>
                </div>
              </div>
            </div>
          </td>
        </tr>
        ${options.expand ? `
          <tr id="${detailsId}" class="detail-row">
            <td colspan="${showRef ? 9 : 8}">
              <div class="detail-box">${chargeDetails(c)}</div>
            </td>
          </tr>` : ''}
      `;
    }).join('');
  }

  function chargeDetails(c) {
    const ct = chargeContrato(c);
    const im = contratoImovel(ct);
    const iq = contratoInquilino(ct);
    const comp = chargeComposition(c);
    return `
      <div class="contract-detalhes-grid">
        <div class="contract-det-item"><strong>Contrato</strong><span>#${ct.id || '-'}</span></div>
        <div class="contract-det-item"><strong>Inquilino</strong><span>${escapeHTML(iq.nome || '-')}</span></div>
        <div class="contract-det-item"><strong>Telefone</strong><span>${phoneBR(iq.telefone)}</span></div>
        <div class="contract-det-item"><strong>Nome Pix</strong><span>${escapeHTML(iq.nomePix || '-')}</span></div>
        <div class="contract-det-item contract-det-wide"><strong>Imóvel</strong><span>${escapeHTML(im.endereco || '-')}</span></div>
      </div>
      <div class="contract-det-section">
        <div class="contract-det-title">Composição da cobrança</div>
        <div class="contract-detalhes-grid">
          <div class="contract-det-item"><strong>Aluguel</strong><span>${money(comp.aluguel)}</span></div>
          <div class="contract-det-item"><strong>Taxas</strong><span>${money(comp.taxas)}</span></div>
          <div class="contract-det-item"><strong>IPTU</strong><span>${money(comp.iptu)}</span></div>
          <div class="contract-det-item"><strong>Seguro fiança</strong><span>${money(comp.seguro)}</span></div>
          <div class="contract-det-item"><strong>Encargos</strong><span>${money(comp.encargos)}</span></div>
          <div class="contract-det-item"><strong>Recebido</strong><span>${money(c.recebido)}</span></div>
          <div class="contract-det-item"><strong>Saldo</strong><span>${money(saldo(c))}</span></div>
          <div class="contract-det-item contract-det-wide"><strong>Observação</strong><span>${escapeHTML(c.obs || 'Sem observação registrada.')}</span></div>
        </div>
      </div>
    `;
  }

  function renderInicio() {
    const charges = monthlyCharges();
    const previsto = sum(charges, 'total');
    const recebido = sum(charges, 'recebido');
    const saldoMes = charges.reduce((total, c) => total + saldo(c), 0);
    const atrasadas = demo.cobrancas.filter((c) => c.status === 'ATRASADO');
    const proximas = demo.cobrancas
      .filter((c) => ['EM_ABERTO', 'PARCIAL', 'FUTURA'].includes(c.status) && daysFromToday(c.vencimento) >= 0 && daysFromToday(c.vencimento) <= 12)
      .sort((a, b) => a.vencimento.localeCompare(b.vencimento))
      .slice(0, 5);
    const contratosVencendo = demo.contratos
      .filter((ct) => ct.ativo && daysFromToday(ct.fim) >= 0 && daysFromToday(ct.fim) <= 60)
      .sort((a, b) => a.fim.localeCompare(b.fim));
    const ocupados = demo.imoveis.filter((item) => item.emUso).length;
    const pct = previsto > 0 ? Math.round((recebido / previsto) * 100) : 0;
    const pctOcupacao = Math.round((ocupados / demo.imoveis.length) * 100);

    return `
      <div class="dash-page">
        <div class="dash-head">
          <div>
            <div class="dash-eyebrow">Resumo operacional de ${String(state.month).padStart(2, '0')}/${state.year}</div>
            <h1 class="dash-title">Início</h1>
          </div>
          <div class="dash-actions">
            <a class="cm-btn-gerar" href="#controle"><span class="material-symbols-outlined">calendar_month</span>Controle Mensal</a>
            <button class="btn-ghost" type="button" data-action="open-form" data-form="cobranca"><span class="material-symbols-outlined">add_card</span>Nova Cobrança</button>
          </div>
        </div>

        <div class="cm-kpi-grid">
          ${kpi('Previsto no Mês', money(previsto), `${charges.length} cobranças em ${meses[state.month]}`, 'attach_money', 'green')}
          ${kpi('Recebido no Mês', money(recebido), 'Caixa do mês de competência', 'paid', 'blue')}
          ${kpi('Em Aberto', money(saldoMes), `${charges.filter((c) => c.status !== 'PAGO').length} cobranças abertas`, 'pending_actions', 'orange')}
          ${kpi('Atrasado Geral', money(sum(atrasadas, null, saldo)), `${atrasadas.length} cobrança em atraso`, 'warning', 'red')}
        </div>

        <div class="card dash-progress-card">
          <div class="dash-progress-inner">
            <div>
              <div class="dash-progress-title">Recebimento por competência - ${meses[state.month]} ${state.year}</div>
              <div class="cm-bar-wrap"><div class="cm-bar-fill" style="width:${pct}%"></div></div>
              <div class="dash-progress-meta">
                <span>Recebido: ${money(recebido)}</span>
                <span>Previsto: ${money(previsto)}</span>
                <span>Saldo: ${money(saldoMes)}</span>
              </div>
            </div>
            <div class="dash-big-pct">${pct}%</div>
          </div>
        </div>

        <div class="dash-panel-grid">
          <div class="dash-side-stack">
            ${dashList('report', 'Cobranças em atraso', '#cobrancas', 'Ver todas', atrasadas.map((c) => dashChargeRow(c, true)))}
            ${dashList('schedule', `Vencem nos próximos 12 dias`, '#cobrancas', 'Ver cobranças', proximas.map((c) => dashChargeRow(c, false)))}
          </div>

          <div class="dash-side-stack">
            <div class="dash-mini-grid">
              ${miniCard('Ocupação', `${pctOcupacao}%`, `${ocupados} de ${demo.imoveis.length} imóveis`)}
              ${miniCard('Contratos Ativos', demo.contratos.filter((ct) => ct.ativo).length, `${contratosVencendo.length} vencendo`)}
              ${miniCard('Inquilinos', demo.inquilinos.length, 'cadastros no sistema')}
              ${miniCard('Saldo Aberto', money(demo.cobrancas.reduce((total, c) => total + saldo(c), 0)), 'todas as competências')}
            </div>
            ${dashList('contract', 'Contratos vencendo', '#contratos', 'Ver contratos', contratosVencendo.map((ct) => {
              const im = contratoImovel(ct);
              const iq = contratoInquilino(ct);
              const dias = daysFromToday(ct.fim);
              return `<div class="dash-row"><div class="dash-row-main"><div class="dash-row-title">Contrato #${ct.id} · ${escapeHTML(im.apelido)}</div><div class="dash-row-sub">${escapeHTML(iq.nome)} · fim em ${dateBR(ct.fim)}</div></div><div class="dash-row-side"><div class="dash-row-note warn">${dias} dias</div></div></div>`;
            }))}
            ${dashList('payments', 'Últimos recebimentos', '#relatorios', 'Relatórios', demo.cobrancas.filter((c) => c.recebido > 0).slice(0, 4).map((c) => {
              const im = chargeImovel(c);
              const iq = chargeInquilino(c);
              return `<div class="dash-row"><div class="dash-row-main"><div class="dash-row-title">${escapeHTML(iq.nome)}</div><div class="dash-row-sub">${escapeHTML(im.apelido)} · ${dateBR(c.recebimento)} · ${formaLabel(c.forma)}</div></div><div class="dash-row-side"><div class="dash-row-value">${money(c.recebido)}</div></div></div>`;
            }))}
          </div>
        </div>

        <div>
          <div class="cm-section-title"><span class="material-symbols-outlined">grid_view</span>Acesso rápido</div>
          <div class="dash-links">
            ${quickLink('controle', 'calendar_month', 'Controle Mensal', `${meses[state.month]} ${state.year}`, 'green')}
            ${quickLink('cobrancas', 'payments', 'Cobranças', `${atrasadas.length} atrasada`, 'warn')}
            ${quickLink('imoveis', 'apartment', 'Imóveis', `${demo.imoveis.filter((i) => !i.emUso).length} livres`, 'blue')}
            ${quickLink('inquilinos', 'group', 'Inquilinos', `${demo.inquilinos.length} cadastrados`, 'purple')}
            ${quickLink('contratos', 'description', 'Contratos', `${demo.contratos.filter((ct) => ct.ativo).length} ativos`, 'danger')}
            ${quickLink('documentos', 'draft', 'Documentos', 'Contratos, despejo e vistoria', 'blue')}
            ${quickLink('relatorios', 'analytics', 'Relatórios', 'CSV, XLSX e PDF', 'green')}
            ${quickLink('configuracoes', 'settings', 'Configurações', 'Usuários e auditoria', 'warn')}
          </div>
        </div>
      </div>
    `;
  }

  function dashChargeRow(c, overdue) {
    const im = chargeImovel(c);
    const iq = chargeInquilino(c);
    const days = daysFromToday(c.vencimento);
    return `
      <div class="dash-row">
        <div class="dash-row-main">
          <div class="dash-row-title">${escapeHTML(im.apelido || im.endereco)}</div>
          <div class="dash-row-sub">${escapeHTML(iq.nome)} · Ref. ${refBR(c)} · Venc. ${dateBR(c.vencimento)}</div>
        </div>
        <div class="dash-row-side">
          <div class="dash-row-value ${overdue ? 'danger' : ''}">${money(saldo(c))}</div>
          <div class="dash-row-note ${overdue ? 'danger' : 'warn'}">${overdue ? `+${Math.abs(days)} dias` : `${days} dias`}</div>
        </div>
      </div>
    `;
  }

  function dashList(icon, title, link, linkText, rows) {
    return `
      <div class="card dash-list-card">
        <div class="dash-list-head">
          <div class="dash-list-title"><span class="cm-kpi-ico cm-ico-${icon === 'report' ? 'red' : icon === 'schedule' ? 'orange' : icon === 'payments' ? 'green' : 'blue'}"><span class="material-symbols-outlined">${icon}</span></span>${title}</div>
          <a class="dash-list-link" href="${link}">${linkText}</a>
        </div>
        ${rows.length ? rows.join('') : '<div class="dash-empty">Nenhum registro encontrado.</div>'}
      </div>
    `;
  }

  function miniCard(label, value, sub) {
    return `<div class="card dash-mini"><div class="dash-mini-label">${label}</div><div class="dash-mini-value">${value}</div><div class="dash-mini-sub">${sub}</div></div>`;
  }

  function quickLink(route, icon, label, sub, color) {
    return `
      <a class="dash-link-card" href="#${route}">
        <div class="dash-link-ico dash-${color}-bg"><span class="material-symbols-outlined">${icon}</span></div>
        <div class="dash-link-text"><div class="dash-link-label">${label}</div><div class="dash-link-sub">${sub}</div></div>
      </a>
    `;
  }

  function renderControle() {
    const charges = monthlyCharges();
    const previsto = sum(charges, 'total');
    const recebido = sum(charges, 'recebido');
    const aberto = charges.filter((c) => ['EM_ABERTO', 'PARCIAL'].includes(c.status)).reduce((total, c) => total + saldo(c), 0);
    const atraso = charges.filter((c) => c.status === 'ATRASADO').reduce((total, c) => total + saldo(c), 0);
    const pct = previsto ? Math.round((recebido / previsto) * 100) : 0;
    const porImovel = demo.imoveis.filter((i) => i.emUso).map((im) => {
      const rows = charges.filter((c) => chargeImovel(c).id === im.id);
      const totalSaldo = rows.reduce((total, c) => total + saldo(c), 0);
      const status = rows.some((c) => c.status === 'ATRASADO') ? 'ATRASADO' : rows.some((c) => c.status === 'PARCIAL') ? 'PARCIAL' : rows.some((c) => c.status === 'EM_ABERTO') ? 'EM_ABERTO' : 'PAGO';
      const iq = inquilino(im.inquilinoId) || {};
      return { im, iq, totalSaldo, status };
    });

    return `
      <div class="contratos-page controle-mensal-page cm-page">
        <div class="cm-header">
          <div class="month-selector">
            <button class="cm-nav-btn" type="button" data-action="month-prev"><span class="material-symbols-outlined">chevron_left</span></button>
            <span class="cm-month-title">${meses[state.month].toUpperCase()} ${state.year}</span>
            <button class="cm-nav-btn" type="button" data-action="month-next"><span class="material-symbols-outlined">chevron_right</span></button>
          </div>
          <div class="cm-header-actions">
            <button class="cm-btn-hoje" type="button" data-action="month-today"><span class="material-symbols-outlined">calendar_today</span>Hoje</button>
            <button class="cm-btn-gerar" type="button" data-action="toast" data-message="Cobranças do mês geradas."><span class="material-symbols-outlined">add</span>Gerar Cobranças do Mês</button>
          </div>
        </div>

        <div class="cm-kpi-grid">
          ${kpi('Previsto no Mês', money(previsto), `${charges.length} cobranças`, 'attach_money', 'green')}
          ${kpi('Recebido', money(recebido), `${pct}% do previsto`, 'check_circle', 'blue')}
          ${kpi('Em Aberto', money(aberto), `${charges.filter((c) => ['EM_ABERTO', 'PARCIAL'].includes(c.status)).length} cobranças`, 'pending', 'orange')}
          ${kpi('Em Atraso', money(atraso), `${charges.filter((c) => c.status === 'ATRASADO').length} atrasada`, 'warning', 'red')}
        </div>

        <div class="card cm-progress-card">
          <div class="cm-progress-head"><span>Progresso de Recebimentos</span><span class="${pct >= 100 ? 'cm-pct-ok' : 'cm-pct-low'}">${pct}% recebido</span></div>
          <div class="cm-bar-wrap"><div class="cm-bar-fill" style="width:${pct}%"></div></div>
          <div class="cm-progress-labels"><span>Recebido: ${money(recebido)}</span><span>Meta: ${money(previsto)}</span><span class="danger">Saldo: ${money(previsto - recebido)}</span></div>
        </div>

        ${filtersCard(`
          <div class="row">
            <div class="col"><label>Ano</label><input value="${state.year}" data-demo-filter></div>
            <div class="col"><label>Mês</label><select><option>${meses[state.month]}</option><option>Todos</option></select></div>
            <div class="col"><label>Status</label><select><option>Todos</option><option>Atrasado</option><option>Pago</option><option>Em aberto</option></select></div>
            <div class="col"><label>Busca geral</label><input placeholder="Imóvel, inquilino, status..." data-demo-filter></div>
            <div class="col actions"><button type="button" data-action="toast" data-message="Filtros aplicados.">Filtrar</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Mês atual</button></div>
          </div>
        `)}

        <div class="card cm-table-card listagem-card">
          <div class="cm-table-head">
            <span class="cm-table-title"><span class="material-symbols-outlined">receipt_long</span>Cobranças do Período (${charges.length})</span>
            <div class="cm-table-actions"><button class="cm-btn-export" type="button" data-action="print-page"><span class="material-symbols-outlined">print</span></button></div>
          </div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela listagem-table listagem-table--mensal", columns: ["Imóvel", "Inquilino", "Ref.", "Venc.", "Total", "Saldo", "Status", "Ações"], rowsHtml: `${chargeRows(charges, { expand: false, context: 'controle' })}`, emptyMessage: "Nenhuma cobrança encontrada para este período." })}
          </div>
        </div>

        <div class="card cm-table-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">home_work</span>Situação por Imóvel</span></div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela", columns: ["Imóvel", "Inquilino", "Status do mês", "Saldo", "Ação"], rowsHtml: `
                ${porImovel.map((row) => `
                  <tr>
                    <td><div class="cm-imovel-cell"><span class="cm-imovel-nome">${escapeHTML(row.im.apelido)}</span><span class="cm-imovel-end">${escapeHTML(row.im.endereco)}</span></div></td>
                    <td>${escapeHTML(row.iq.nome || '-')}</td>
                    <td>${statusBadge(row.status)}</td>
                    <td>${money(row.totalSaldo)}</td>
                    <td>${row.totalSaldo > 0 ? actionButton('Dar Baixa', 'payments', 'open-payment', `data-id="${(charges.find((c) => chargeImovel(c).id === row.im.id) || {}).id}"`) : '<span class="muted">Quitado</span>'}</td>
                  </tr>
                `).join('')}
              `, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </div>
    `;
  }

  function renderCobrancas() {
    const atrasadas = demo.cobrancas.filter((c) => c.status === 'ATRASADO' || (['EM_ABERTO', 'PARCIAL'].includes(c.status) && daysFromToday(c.vencimento) < 0));
    const vencendo = demo.cobrancas.filter((c) => ['EM_ABERTO', 'PARCIAL'].includes(c.status) && daysFromToday(c.vencimento) >= 0 && daysFromToday(c.vencimento) <= 5);
    const pagosMes = monthlyCharges().filter((c) => c.status === 'PAGO');
    const futuras = demo.cobrancas.filter((c) => c.status === 'FUTURA');

    return `
      <div class="contratos-page cobrancas-page compact-fit-page cm-page">
        <div class="lp-header">
          <div>
            <h1 class="lp-title">Cobranças</h1>
            <div class="lp-subtitle">Visão rápida de vencidos, vencendo e status do mês.</div>
          </div>
          <div class="cm-header-actions">
            <button class="cm-btn-hoje" type="button" data-action="toast" data-message="Cobranças atualizadas."><span class="material-symbols-outlined">refresh</span>Atualizar</button>
            <a class="cm-btn-gerar" href="#controle"><span class="material-symbols-outlined">calendar_month</span>Controle Mensal</a>
          </div>
        </div>

        <div class="cm-kpi-grid">
          ${kpi('Devendo (Vencidos)', atrasadas.length, `Saldo: ${money(sum(atrasadas, null, saldo))}`, 'warning', 'red')}
          ${kpi('Vencem em 5 dias', vencendo.length, `Saldo: ${money(sum(vencendo, null, saldo))}`, 'schedule', 'orange')}
          ${kpi('Pagos no mês', pagosMes.length, `Total: ${money(sum(pagosMes, 'total'))}`, 'check_circle', 'green')}
          ${kpi('Futuras pré-geradas', futuras.length, `Somatório: ${money(sum(futuras, 'total'))}`, 'pending', 'blue')}
        </div>

        ${filtersCard(`
          <div class="grid">
            <div><label>Pesquisa geral</label><input placeholder="Imóvel, inquilino, telefone, nome Pix, 09/2026"></div>
            <div><label>Status</label><select><option>Todos</option><option>Atrasado</option><option>Em aberto</option><option>Parcial</option><option>Pago</option></select></div>
            <div><label>Forma de pagamento</label><select><option>Todas</option><option>Pix</option><option>Cartão de crédito</option><option>Dinheiro</option></select></div>
            <div><label>PIX</label><select><option>Todos</option><option>Com nome Pix</option><option>Sem nome Pix</option></select></div>
          </div>
          <div class="actions-inline" style="margin-top:12px"><button type="button" data-action="toast" data-message="Filtros aplicados.">Aplicar</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Limpar</button></div>
        `)}

        ${chargeTable('Devendo - Vencidos', 'warning', atrasadas, 'devendo')}
        ${chargeTable('Vencem nos próximos dias', 'schedule', vencendo, 'vencendo')}
      </div>
    `;
  }

  function chargeTable(title, icon, charges, context) {
    return `
      <div class="card cm-table-card">
        <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">${icon}</span>${title} (${charges.length})</span></div>
        <div class="table-wrap">
          ${table({ className: "tabela cm-tabela tabela-ajustada-1200 cobrancas-dashboard-table", columns: ["", "Imóvel", "Inquilino", "Ref.", "Vencimento", "Total", "Saldo", "Status", "Ações"], rowsHtml: `${chargeRows(charges, { expand: true, context })}`, emptyMessage: "Nenhuma cobrança encontrada." })}
        </div>
      </div>
    `;
  }

  function renderImoveis() {
    const total = demo.imoveis.length;
    const alugados = demo.imoveis.filter((i) => i.emUso).length;
    const receita = demo.imoveis.filter((i) => i.emUso).reduce((acc, item) => acc + item.aluguel, 0);
    return `
      <div class="cm-page">
        <div class="lp-header">
          <div><h1 class="lp-title">Imóveis</h1><div class="lp-subtitle">Gerencie imóveis, valores padrão e status.</div></div>
          <div class="cm-header-actions"><button class="cm-btn-gerar" type="button" data-action="open-form" data-form="imovel"><span class="material-symbols-outlined">add</span>Novo Imóvel</button></div>
        </div>

        <div class="cm-kpi-grid">
          ${kpi('Total de Imóveis', total, 'imóveis cadastrados', 'apartment', 'blue')}
          ${kpi('Alugados', alugados, 'imóveis alugados', 'key', 'green')}
          ${kpi('Disponíveis', total - alugados, 'imóveis disponíveis', 'lock_open', 'orange')}
          ${kpi('Receita Mensal', money(receita), 'aluguel dos imóveis ativos', 'attach_money', 'green')}
        </div>

        ${filtersCard(`
          <div class="row">
            <div class="col"><label>Buscar</label><input placeholder="Casa Centro, Rua X, Copasa, Cemig, #12..."></div>
            <div class="col"><label>Status</label><select><option>Todos</option><option>Disponível</option><option>Alugado</option></select></div>
            <div class="col"><label>Contrato</label><select><option>Todos</option><option>Com contrato</option><option>Sem contrato</option></select></div>
            <div class="col actions"><button type="button" data-action="toast" data-message="Busca aplicada.">Filtrar</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Limpar</button></div>
          </div>
        `)}

        <div class="card cm-table-card listagem-card">
          <div class="cm-table-head">
            <span class="cm-table-title"><span class="material-symbols-outlined">apartment</span>Imóveis (${total})</span>
            <button class="cm-btn-gerar" type="button" data-action="open-form" data-form="imovel"><span class="material-symbols-outlined">add</span>Novo</button>
          </div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela", columns: ["", "Status", "Imóvel", "Endereço", "Aluguel", "Taxas", "IPTU", "Ações"], rowsHtml: `
                ${demo.imoveis.map((im, index) => {
                  const iq = inquilino(im.inquilinoId) || {};
                  const detailId = `imovel-detalhe-${im.id}-${index}`;
                  return `
                    <tr>
                      <td><button class="btn-expand" type="button" data-action="toggle-detail" data-target="${detailId}" aria-expanded="false"><span class="material-symbols-outlined">chevron_right</span></button></td>
                      <td>${statusBadge(im.emUso ? 'ALUGADO' : 'DISPONIVEL')}</td>
                      <td><strong>${escapeHTML(im.apelido)}</strong></td>
                      <td>${escapeHTML(im.endereco)}</td>
                      <td>${money(im.aluguel)}</td>
                      <td>${money(im.taxas)}</td>
                      <td>${money(im.iptu)}</td>
                      <td><div class="cm-acoes">${actionButton('Editar', 'edit', 'open-form', 'data-form="imovel"')}${miniIcon('delete', 'Excluir', 'toast', 'data-message="Imóvel excluído."')}</div></td>
                    </tr>
                    <tr id="${detailId}" class="detail-row">
                      <td colspan="8">
                        <div class="detail-box">
                          <div class="detail-grid">
                            <div><div class="detail-label">Nome de quem está alugando</div><div class="detail-value">${escapeHTML(iq.nome || '-')}</div></div>
                            <div><div class="detail-label">Contrato</div><div class="detail-value">${im.contratoId ? `#${im.contratoId}` : '-'}</div></div>
                            <div><div class="detail-label">Endereço completo</div><div class="detail-value">${escapeHTML(im.endereco)}</div></div>
                            <div><div class="detail-label">Identificador Copasa</div><div class="detail-value">${escapeHTML(im.copasa)}</div></div>
                            <div><div class="detail-label">Identificador Cemig</div><div class="detail-value">${escapeHTML(im.cemig)}</div></div>
                            <div><div class="detail-label">Água</div><div class="detail-value">${money(im.agua)}</div></div>
                            <div><div class="detail-label">Luz</div><div class="detail-value">${money(im.luz)}</div></div>
                            <div><div class="detail-label">Status</div><div class="detail-value">${im.emUso ? 'Alugado' : 'Disponível'}</div></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              `, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </div>
    `;
  }

  function renderInquilinos() {
    const comImovel = demo.inquilinos.filter((iq) => demo.contratos.some((ct) => ct.inquilinoId === iq.id && ct.ativo)).length;
    return `
      <div class="cm-page">
        <div class="lp-header">
          <div><h1 class="lp-title">Inquilinos</h1><div class="lp-subtitle">Gerencie cadastro, contato e dados de Pix.</div></div>
          <div class="cm-header-actions"><button class="cm-btn-gerar" type="button" data-action="open-form" data-form="inquilino"><span class="material-symbols-outlined">add</span>Novo Inquilino</button></div>
        </div>
        <div class="cm-kpi-grid cm-kpi-grid--3">
          ${kpi('Total', demo.inquilinos.length, 'inquilinos cadastrados', 'group', 'blue')}
          ${kpi('Com imóvel', comImovel, 'com vínculo de imóvel', 'home', 'green')}
          ${kpi('Sem imóvel', demo.inquilinos.length - comImovel, 'sem vínculo de imóvel', 'home_work', 'orange')}
        </div>

        ${filtersCard(`
          <div class="row">
            <div class="col"><label>Nome, CPF, telefone ou nome Pix</label><input placeholder="João, 123..., (31)..."></div>
            <div class="col actions"><button type="button" data-action="toast" data-message="Busca aplicada.">Buscar</button><button class="btn-sec" type="button" data-action="toast" data-message="Busca limpa.">Limpar</button></div>
          </div>
        `, 'Buscar inquilino')}

        <div class="card cm-table-card listagem-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">group</span>Inquilinos (${demo.inquilinos.length})</span></div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela", columns: ["", "Inquilino", "CPF", "Telefone", "Nome Pix", "Ações"], rowsHtml: `
                ${demo.inquilinos.map((iq, index) => {
                  const ct = demo.contratos.find((item) => item.inquilinoId === iq.id && item.ativo) || {};
                  const im = ct.imovelId ? imovel(ct.imovelId) : {};
                  const detailId = `inquilino-detalhe-${iq.id}-${index}`;
                  return `
                    <tr>
                      <td><button class="btn-expand" type="button" data-action="toggle-detail" data-target="${detailId}" aria-expanded="false"><span class="material-symbols-outlined">chevron_right</span></button></td>
                      <td><span class="table-primary-text">${escapeHTML(iq.nome)}</span></td>
                      <td>${cpfBR(iq.cpf)}</td>
                      <td>${phoneBR(iq.telefone)}</td>
                      <td>${escapeHTML(iq.nomePix || '-')}</td>
                      <td><div class="cm-acoes">${miniIcon('chat', 'WhatsApp', 'whatsapp-tenant', `data-id="${iq.id}"`)}${actionButton('Editar', 'edit', 'open-form', 'data-form="inquilino"')}${miniIcon('delete', 'Excluir', 'toast', 'data-message="Inquilino excluído."')}</div></td>
                    </tr>
                    <tr id="${detailId}" class="detail-row">
                      <td colspan="6">
                        <div class="detail-box">
                          <div class="detail-grid">
                            <div><div class="detail-label">Imóvel alugado</div><div class="detail-value">${escapeHTML(im.apelido || '-')}</div></div>
                            <div><div class="detail-label">Contrato</div><div class="detail-value">${ct.id ? `#${ct.id}` : '-'}</div></div>
                            <div><div class="detail-label">Nome completo</div><div class="detail-value">${escapeHTML(iq.nome)}</div></div>
                            <div><div class="detail-label">Telefone</div><div class="detail-value">${phoneBR(iq.telefone)}</div></div>
                            <div><div class="detail-label">CPF</div><div class="detail-value">${cpfBR(iq.cpf)}</div></div>
                            <div><div class="detail-label">Nome de quem faz o Pix</div><div class="detail-value">${escapeHTML(iq.nomePix || '-')}</div></div>
                            <div style="grid-column:1/-1"><div class="detail-label">Observações</div><div class="detail-value">${escapeHTML(iq.observacoes || '-')}</div></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              `, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </div>
    `;
  }

  function renderContratos() {
    const ativos = demo.contratos.filter((ct) => ct.ativo);
    const vencendo = ativos.filter((ct) => daysFromToday(ct.fim) >= 0 && daysFromToday(ct.fim) <= 60);
    const reajustesMes = ativos.filter((ct) => ct.mesReajuste === state.month);
    return `
      <div class="contratos-page contratos-index-page compact-fit-page cm-page">
        <div class="lp-header">
          <div><h1 class="lp-title">Contratos</h1><div class="lp-subtitle">Gerencie contratos, inquilinos, imóvel em uso e descontos.</div></div>
          <div class="cm-header-actions"><button class="cm-btn-gerar" type="button" data-action="open-form" data-form="contrato"><span class="material-symbols-outlined">add</span>Novo Contrato</button></div>
        </div>
        <div class="cm-kpi-grid cm-kpi-grid--3">
          ${kpi('Total', demo.contratos.length, 'contratos cadastrados', 'description', 'blue')}
          ${kpi('Ativos', ativos.length, 'contratos ativos', 'check_circle', 'green')}
          ${kpi('Vencendo', vencendo.length, 'vencem em até 60 dias', 'schedule', 'orange')}
        </div>

        ${alertBar('warning', 'Alerta de contratos - Término próximo', vencendo.map((ct) => {
          const im = contratoImovel(ct);
          const iq = contratoInquilino(ct);
          return `<div class="ct-alert-item"><div class="ct-alert-dot ct-dot-warn"></div><div><div class="ct-alert-nome">${escapeHTML(im.apelido)}</div><div class="ct-alert-info">${escapeHTML(iq.nome)} · termina em ${daysFromToday(ct.fim)} dias</div></div><div class="ct-alert-actions">${actionButton('Editar', 'edit', 'open-form', 'data-form="contrato"')}${actionButton('Descontos', 'percent', 'open-form', 'data-form="desconto"')}</div></div>`;
        }))}

        ${alertBar('trending_up', `Reajustes do mês - ${meses[state.month]}/${state.year}`, reajustesMes.map((ct) => {
          const im = contratoImovel(ct);
          const iq = contratoInquilino(ct);
          return `<div class="ct-alert-item"><div class="ct-alert-dot ct-dot-info"></div><div><div class="ct-alert-nome">${escapeHTML(im.apelido)}</div><div class="ct-alert-info">${escapeHTML(iq.nome)} · ${money(im.aluguel)} → ${money(Math.round(im.aluguel * 1.065))}</div></div><div class="ct-alert-actions">${actionButton('Ver contrato', 'visibility', 'open-form', 'data-form="contrato"')}</div></div>`;
        }))}

        ${filtersCard(`
          <div class="row">
            <div class="col"><label>Buscar</label><input placeholder="Imóvel, endereço, inquilino, telefone"></div>
            <div class="col actions"><button type="button" data-action="toast" data-message="Busca aplicada.">Buscar</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Limpar</button></div>
          </div>
        `)}

        <div class="card cm-table-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">description</span>Contratos (${demo.contratos.length})</span></div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela tabela-ajustada-1200 contratos-index-table", columns: ["", "Status", "Imóvel", "Inquilino", "Dia pgto", "Reajuste", "Início", "Término", "Ações"], rowsHtml: `
                ${demo.contratos.map((ct) => contractRow(ct)).join('')}
              `, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </div>
    `;
  }

  function alertBar(icon, title, rows) {
    if (!rows.length) return '';
    return `
      <div class="ct-alert-bar card">
        <div class="ct-alert-head"><span class="material-symbols-outlined">${icon}</span>${title}<span style="margin-left:auto;color:var(--muted);font-size:12px">Total: <b>${rows.length}</b></span></div>
        <div class="ct-alert-items">${rows.join('')}</div>
      </div>
    `;
  }

  function contractRow(ct) {
    const im = contratoImovel(ct);
    const iq = contratoInquilino(ct);
    const detailsId = `contract-details-${ct.id}`;
    return `
      <tr>
        <td><button class="btn-expand" type="button" data-action="toggle-detail" data-target="${detailsId}" aria-expanded="false"><span class="material-symbols-outlined">chevron_right</span></button></td>
        <td>${statusBadge(ct.ativo ? 'ATIVO' : 'INATIVO')}</td>
        <td><div class="cm-imovel-cell"><a class="detail-link cm-imovel-nome" href="#imoveis">${escapeHTML(im.apelido || '-')}</a><span class="cm-imovel-end">${escapeHTML(im.endereco || '-')}</span></div></td>
        <td><div class="cm-inq-cell"><div class="cm-avatar" style="background:${colorFor(iq.nome)}">${initials(iq.nome)}</div><a class="detail-link" href="#inquilinos">${escapeHTML(iq.nome || '-')}</a></div></td>
        <td>${ct.diaPagamento || '-'}</td>
        <td>${meses[ct.mesReajuste] || '-'}</td>
        <td>${dateBR(ct.inicio)}</td>
        <td>${dateBR(ct.fim)}</td>
        <td>
          <div class="cm-acoes">
            ${actionButton('Editar', 'edit', 'open-form', 'data-form="contrato"')}
            <div class="row-menu-wrap">
              <button type="button" class="btn-row-menu" data-action="toggle-menu" data-menu="menu-contrato-${ct.id}" aria-label="Mais ações"><span class="material-symbols-outlined">more_vert</span></button>
              <div class="row-menu" id="menu-contrato-${ct.id}">
                <button type="button" class="menu-action" data-action="open-form" data-form="desconto"><span class="menu-ico">%</span>Descontos</button>
                <button type="button" class="menu-action" data-action="open-form" data-form="reajuste"><span class="menu-ico">↗</span>Reajustes</button>
                <button type="button" class="menu-action" data-action="doc-template" data-template="contrato"><span class="menu-ico">DOC</span>Gerar contrato</button>
                <button type="button" class="menu-action" data-action="doc-template" data-template="chaves"><span class="menu-ico">KEY</span>Termo de chaves</button>
                <button type="button" class="menu-action" data-action="doc-template" data-template="vistoria"><span class="menu-ico">VIS</span>Termo de vistoria</button>
                <button type="button" class="menu-action" data-action="toast" data-message="Contrato excluído."><span class="menu-ico">DEL</span>Excluir contrato</button>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr id="${detailsId}" class="contract-details-row detail-row">
        <td colspan="9">
          <div class="contract-details-wrap">
            <div class="contract-detalhes-grid">
              <div class="contract-det-item"><strong>ID</strong><span>#${ct.id}</span></div>
              <div class="contract-det-item"><strong>Ativo</strong><span>${ct.ativo ? 'Sim' : 'Não'}</span></div>
              <div class="contract-det-item"><strong>Dia de pagamento</strong><span>${ct.diaPagamento}</span></div>
              <div class="contract-det-item"><strong>Mês de reajuste</strong><span>${meses[ct.mesReajuste]}</span></div>
              <div class="contract-det-item"><strong>Seguro fiança</strong><span>${money(ct.seguro)}</span></div>
              <div class="contract-det-item"><strong>Depósito garantia</strong><span>${money(ct.deposito)}</span></div>
              <div class="contract-det-item"><strong>Multa</strong><span>${ct.multa}%</span></div>
              <div class="contract-det-item"><strong>Juros mensal</strong><span>${ct.juros}%</span></div>
              <div class="contract-det-item"><strong>Honorários</strong><span>${ct.honorarios}% após ${ct.honorariosApos} dias</span></div>
              <div class="contract-det-item contract-det-wide"><strong>Observações</strong><span>${escapeHTML(ct.observacoes)}</span></div>
            </div>
          </div>
        </td>
      </tr>
    `;
  }

  function renderRelatorios() {
    const type = state.reportType;
    const rows = reportRows(type);
    const total = rows.reduce((acc, row) => acc + (row.total || 0), 0);
    const recebido = rows.reduce((acc, row) => acc + (row.recebido || 0), 0);
    const saldoTotal = rows.reduce((acc, row) => acc + (row.saldo || 0), 0);
    const overdue = rows.filter((row) => row.status === 'ATRASADO' || row.saldo > 0).length;
    const grouped = reportGrouped(rows, type);

    return report({
      type, title: reportTitle(type), subtitle: reportSubtitle(type),
      tabs: ['geral', 'inquilino', 'imovel', 'contrato'].map((key) => ({ key, icon: reportIcon(key), label: reportLabel(key) })),
      metricsHtml: [
        kpi('Registros', rows.length, 'linhas no filtro atual', 'bar_chart', 'blue'),
        kpi('Total', money(total), 'valor cobrado', 'payments', 'green'),
        kpi('Recebido', money(recebido), 'pagamentos registrados', 'account_balance_wallet', 'orange'),
        kpi('Saldo', money(saldoTotal), `${overdue} registro(s) pendentes`, 'warning', 'red')
      ].join(''),
      filtersHtml: filtersCard(reportFilters(type)), grouped, total, formatMoney: money,
      columns: type === 'imovel'
        ? ['ID', 'Imóvel', 'Status', 'Contrato', 'Inquilino', 'Total cobrado', 'Recebido', 'Saldo']
        : ['ID', 'Ref.', 'Status', 'Venc.', 'Forma', 'Imóvel', 'Inquilino', 'Contrato', 'Total', 'Recebido', 'Saldo', 'Atraso'],
      rowsHtml: rows.map((row) => reportRowHtml(row, type)).join(''), count: rows.length
    });
  }

  function reportRows(type) {
    if (type === 'imovel') {
      return demo.imoveis.map((im) => {
        const charges = demo.cobrancas.filter((c) => chargeImovel(c).id === im.id);
        const iq = inquilino(im.inquilinoId) || {};
        return {
          id: im.id,
          imovel: im.apelido,
          status: im.emUso ? 'ALUGADO' : 'DISPONIVEL',
          contrato: im.contratoId || '-',
          inquilino: iq.nome || '-',
          total: sum(charges, 'total'),
          recebido: sum(charges, 'recebido'),
          saldo: charges.reduce((total, c) => total + saldo(c), 0)
        };
      });
    }
    return demo.cobrancas.map((c) => {
      const ct = chargeContrato(c);
      const im = contratoImovel(ct);
      const iq = contratoInquilino(ct);
      return {
        id: c.id,
        ref: refBR(c),
        status: c.status,
        vencimento: c.vencimento,
        forma: c.forma || '-',
        imovel: im.apelido || '-',
        inquilino: iq.nome || '-',
        contrato: ct.id || '-',
        total: c.total,
        recebido: c.recebido,
        saldo: saldo(c),
        atraso: c.status === 'ATRASADO' ? Math.abs(daysFromToday(c.vencimento)) : 0
      };
    }).filter((row) => {
      if (type === 'inquilino') return row.inquilino !== '-';
      if (type === 'contrato') return row.contrato !== '-';
      return true;
    });
  }

  function reportGrouped(rows, type) {
    if (type === 'imovel') {
      return [
        { label: 'Alugados', value: rows.filter((row) => row.status === 'ALUGADO').reduce((acc, row) => acc + row.total, 0) },
        { label: 'Disponíveis', value: rows.filter((row) => row.status === 'DISPONIVEL').reduce((acc, row) => acc + row.total, 0) }
      ];
    }
    const map = {};
    rows.forEach((row) => {
      const key = row.ref || 'Sem referência';
      map[key] = (map[key] || 0) + row.total;
    });
    return Object.keys(map).map((label) => ({ label, value: map[label] }));
  }

  function reportRowHtml(row, type) {
    if (type === 'imovel') {
      return `<tr><td>${row.id}</td><td>${escapeHTML(row.imovel)}</td><td>${statusBadge(row.status)}</td><td>${row.contrato}</td><td>${escapeHTML(row.inquilino)}</td><td>${money(row.total)}</td><td>${money(row.recebido)}</td><td>${money(row.saldo)}</td></tr>`;
    }
    return `<tr><td>${row.id}</td><td>${row.ref}</td><td>${statusBadge(row.status)}</td><td>${dateBR(row.vencimento)}</td><td>${formaLabel(row.forma)}</td><td>${escapeHTML(row.imovel)}</td><td>${escapeHTML(row.inquilino)}</td><td>#${row.contrato}</td><td>${money(row.total)}</td><td>${money(row.recebido)}</td><td>${money(row.saldo)}</td><td>${row.atraso}</td></tr>`;
  }

  function reportFilters(type) {
    const alvoLabel = type === 'inquilino' ? 'Selecionar inquilino' : type === 'imovel' ? 'Selecionar imóvel' : type === 'contrato' ? 'Selecionar contrato' : 'Selecionar';
    return `
      <div class="report-filter-grid">
        <div><label>Tipo de relatório</label><select><option>${reportLabel(type)}</option><option>Geral</option><option>Por Inquilino</option><option>Por Imóvel</option><option>Por Contrato</option></select></div>
        <div><label>${alvoLabel}</label><select><option>Todos</option><option>Casa Centro</option><option>Inquilino Exemplo 01</option><option>Contrato #101</option></select></div>
        <div><label>Status</label><select><option>Todos</option><option>Pago</option><option>Em aberto</option><option>Atrasado</option><option>Parcial</option></select></div>
        <div><label>Agrupar por</label><select><option>Mês</option><option>Inquilino</option><option>Imóvel</option><option>Status</option><option>Forma de pagamento</option></select></div>
        <div><label>Data inicial</label><input type="date" value="2026-09-01"></div>
        <div><label>Data final</label><input type="date" value="2026-09-30"></div>
        <div><label>Busca livre</label><input placeholder="nome, cpf, telefone, pix, endereço..."></div>
        <div><label>Forma de pagamento</label><select><option>Todas</option><option>Pix</option><option>Cartão de crédito</option><option>Dinheiro</option></select></div>
      </div>
      <div class="actions-inline" style="margin-top:12px"><button type="button" data-action="toast" data-message="Relatório gerado com os filtros selecionados."><span class="material-symbols-outlined">search</span>Gerar relatório</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Limpar filtros</button></div>
    `;
  }

  function reportTitle(type) {
    return {
      geral: 'Relatório Geral',
      inquilino: 'Relatório por Inquilino',
      imovel: 'Relatório por Imóvel',
      contrato: 'Relatório por Contrato'
    }[type];
  }

  function reportSubtitle(type) {
    return {
      geral: 'Visão consolidada do financeiro com filtros amplos e exportação.',
      inquilino: 'Consulta focada no inquilino, com vínculo, cobranças, pagamentos e saldo.',
      imovel: 'Visão patrimonial e de ocupação, com status do imóvel e resumo financeiro.',
      contrato: 'Acompanhamento completo do contrato, vigência e desempenho financeiro.'
    }[type];
  }

  function reportLabel(type) {
    return { geral: 'Geral', inquilino: 'Inquilino', imovel: 'Imóvel', contrato: 'Contrato' }[type];
  }

  function reportIcon(type) {
    return { geral: 'bar_chart', inquilino: 'person', imovel: 'home', contrato: 'description' }[type];
  }

  function renderDocumentos() {
    return `
      <div class="documentos-page">
        <div class="page-head">
          <div><h1>Documentos</h1><div class="subtitle">Templates para gerar, revisar e imprimir documentos do sistema.</div></div>
        </div>
        <div class="stats-grid docs-stats">
          ${stat('Templates', 4, 'contrato, despejo, chaves e vistoria', 'primary')}
          ${stat('Contratos', demo.contratos.length, 'disponíveis para documento')}
          ${stat('Ativos', demo.contratos.filter((ct) => ct.ativo).length, 'contratos em vigor', 'success')}
          ${stat('Criados Hoje', 2, 'documentos gerados')}
        </div>
        <div class="tabs" role="tablist">
          ${docTabButton('contrato', 'contract', 'Contrato de Locação')}
          ${docTabButton('despejo', 'warning', 'Carta de Despejo')}
          ${docTabButton('chaves', 'key', 'Termo de Chaves')}
          ${docTabButton('vistoria', 'fact_check', 'Termo de Vistoria')}
        </div>
        <div class="doc-layout">
          <aside class="doc-side">
            ${docPanelContrato()}
            ${docPanelDespejo()}
            ${docPanelChaves()}
            ${docPanelVistoria()}
          </aside>
          <section class="doc-preview-wrap">
            <div class="card doc-preview-card">
              <div class="doc-preview-toolbar">
                <span class="cm-table-title"><span class="material-symbols-outlined">preview</span>Prévia do documento</span>
                <button type="button" class="cm-btn-gerar" data-action="print-doc"><span class="material-symbols-outlined">print</span>Imprimir / Salvar PDF</button>
              </div>
              <div id="preview-contrato" class="doc-preview"></div>
              <div id="preview-despejo" class="doc-preview"></div>
              <div id="preview-chaves" class="doc-preview"></div>
              <div id="preview-vistoria" class="doc-preview"></div>
              <div class="doc-vars" id="doc-vars"></div>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  function stat(label, value, sub, color) {
    const style = color === 'primary' ? 'style="color:var(--primary)"' : color === 'success' ? 'style="color:var(--success)"' : '';
    return `<div class="stat-card"><div class="stat-label">${label}</div><div class="stat-value" ${style}>${value}</div><div class="stat-sub">${sub}</div></div>`;
  }

  function docTabButton(tab, icon, label) {
    return `<button type="button" class="tab-btn ${state.docTab === tab ? 'active' : ''}" data-action="doc-tab" data-template="${tab}"><span class="material-symbols-outlined">${icon}</span>${label}</button>`;
  }

  function contractOptions() {
    return demo.contratos.map((ct) => {
      const iq = contratoInquilino(ct);
      const im = contratoImovel(ct);
      return `<option value="${ct.id}">#${ct.id} - ${escapeHTML(iq.nome)} / ${escapeHTML(im.apelido || im.endereco)}</option>`;
    }).join('');
  }

  function tenantOptions() {
    return demo.inquilinos.map((iq) => `<option value="${iq.id}">${escapeHTML(iq.nome)}</option>`).join('');
  }

  function propertyOptions() {
    return demo.imoveis.map((im) => `<option value="${escapeHTML(im.endereco)}">${escapeHTML(im.apelido)} - ${escapeHTML(im.endereco)}</option>`).join('');
  }

  function docPanelContrato() {
    return `
      <div class="card tab-content ${state.docTab === 'contrato' ? 'active' : ''}" data-doc-panel="contrato">
        <div class="card-header"><span class="card-title"><span class="material-symbols-outlined">tune</span>Dados do Contrato</span></div>
        <div class="card-body doc-form">
          <div class="form-field"><label>Contrato cadastrado</label><select id="doc-contrato-id">${contractOptions()}</select></div>
          <div class="form-field"><label>Parte locadora</label><input id="doc-locador" value="Locador Exemplo"></div>
          <div class="form-field"><label>Valor por extenso</label><input id="doc-valor-extenso" value="mil setecentos e setenta e cinco reais mensais"></div>
          <div class="form-row"><div class="form-field"><label>Prazo em meses</label><input id="doc-prazo" type="number" value="16"></div><div class="form-field"><label>Primeiro vencimento</label><input id="doc-primeiro" type="date" value="2026-10-05"></div></div>
          <div class="form-field"><label>Forma de pagamento / PIX</label><input id="doc-pagamento" value="depósito ou Pix indicado pela locadora"></div>
          <div class="form-row"><div class="form-field"><label>Cidade da assinatura</label><input id="doc-cidade" value="Belo Horizonte"></div><div class="form-field"><label>UF</label><input id="doc-uf" value="Minas Gerais"></div></div>
          <div class="form-field"><label>Data da assinatura</label><input id="doc-data" type="date" value="2026-09-16"></div>
          <div class="doc-actions"><button type="button" class="btn" data-action="update-doc"><span class="material-symbols-outlined">description</span>Criar Documento</button></div>
        </div>
      </div>
    `;
  }

  function docPanelDespejo() {
    return `
      <div class="card tab-content ${state.docTab === 'despejo' ? 'active' : ''}" data-doc-panel="despejo">
        <div class="card-header"><span class="card-title"><span class="material-symbols-outlined">tune</span>Dados da Carta</span></div>
        <div class="card-body doc-form">
          <div class="form-field"><label>Inquilino</label><select id="doc-despejo-inq">${tenantOptions()}</select></div>
          <div class="form-field"><label>Notificante</label><input id="doc-despejo-notificante" value="Imobiliária Exemplo"></div>
          <div class="form-field"><label>Cidade / UF</label><input id="doc-despejo-cidade" value="Belo Horizonte/MG"></div>
          <div class="form-field"><label>Endereço do imóvel</label><select id="doc-despejo-endereco">${propertyOptions()}</select></div>
          <div class="form-row"><div class="form-field"><label>Prazo em dias</label><input id="doc-despejo-prazo" type="number" value="30"></div><div class="form-field"><label>Saldo devedor</label><input id="doc-despejo-saldo" type="number" value="1775"></div></div>
          <div class="form-field"><label>Motivo</label><select id="doc-despejo-motivo"><option value="inadimplencia">Inadimplência</option><option value="termino">Término de Contrato</option><option value="uso">Uso Próprio</option></select></div>
          <div class="doc-actions"><button type="button" class="btn" data-action="update-doc"><span class="material-symbols-outlined">description</span>Criar Documento</button></div>
        </div>
      </div>
    `;
  }

  function docPanelChaves() {
    return `
      <div class="card tab-content ${state.docTab === 'chaves' ? 'active' : ''}" data-doc-panel="chaves">
        <div class="card-header"><span class="card-title"><span class="material-symbols-outlined">tune</span>Dados do Termo de Chaves</span></div>
        <div class="card-body doc-form">
          <div class="form-field"><label>Contrato cadastrado</label><select id="doc-chaves-contrato">${contractOptions()}</select></div>
          <div class="form-field"><label>Endereço residencial do declarante</label><textarea id="doc-chaves-endereco" rows="2">Rua dos Ipês, 45 - Belo Horizonte/MG</textarea></div>
          <div class="form-row"><div class="form-field"><label>Pessoa que entrega as chaves</label><input id="doc-chaves-entregador" value="Inquilino Exemplo 01"></div><div class="form-field"><label>CPF de quem entrega</label><input id="doc-chaves-cpf" value="123.456.789-09"></div></div>
          <div class="form-field"><label>Responsável pelo recebimento</label><input id="doc-chaves-recebedor" value="Locador Exemplo"></div>
          <div class="form-field"><label>Detalhes da entrega</label><textarea id="doc-chaves-descricao" rows="3">com todas as benfeitorias, instalações e pertences constantes no laudo de vistoria</textarea></div>
          <div class="form-field"><label>Data da entrega</label><input id="doc-chaves-data" type="date" value="2026-09-16"></div>
          <div class="doc-actions"><button type="button" class="btn" data-action="update-doc"><span class="material-symbols-outlined">description</span>Criar Documento</button></div>
        </div>
      </div>
    `;
  }

  function docPanelVistoria() {
    return `
      <div class="card tab-content ${state.docTab === 'vistoria' ? 'active' : ''}" data-doc-panel="vistoria">
        <div class="card-header"><span class="card-title"><span class="material-symbols-outlined">tune</span>Dados do Termo de Vistoria</span></div>
        <div class="card-body doc-form">
          <div class="form-field"><label>Contrato cadastrado</label><select id="doc-vistoria-contrato">${contractOptions()}</select></div>
          <div class="form-field"><label>Locador</label><input id="doc-vistoria-locador" value="Locador Exemplo"></div>
          <div class="form-field"><label>Relatório de vistoria</label><textarea id="doc-vistoria-relatorio" rows="3">em bom estado de conservação, pintura nova, instalações elétricas e hidráulicas em funcionamento</textarea></div>
          <div class="form-field"><label>Pintura</label><input id="doc-vistoria-pintura" value="devendo ser devolvida com pintura em estado equivalente"></div>
          <div class="form-field"><label>Observações</label><textarea id="doc-vistoria-observacoes" rows="3">Sala sem avarias aparentes. Banheiro com metais em funcionamento. Cozinha entregue limpa.</textarea></div>
          <div class="doc-actions"><button type="button" class="btn" data-action="update-doc"><span class="material-symbols-outlined">description</span>Criar Documento</button></div>
        </div>
      </div>
    `;
  }

  function renderConfiguracoes() {
    return `
      <div class="configuracoes-page cm-page">
        <div class="lp-header"><div><h1 class="lp-title">Configurações</h1><div class="lp-subtitle">Gerencie usuários, auditoria e preferências gerais do sistema.</div></div></div>
        <div class="cm-kpi-grid">
          ${kpi('Usuários', demo.usuarios.length, 'cadastrados no sistema', 'group', 'blue')}
          ${kpi('Ativos', demo.usuarios.filter((u) => u.ativo).length, 'podem acessar agora', 'verified_user', 'green')}
          ${kpi('Logins no Mês', 28, 'sessões iniciadas', 'login', 'orange')}
          ${kpi('Atividade', demo.logs.length, 'ações recentes exibidas', 'monitoring', 'blue')}
        </div>
        <div class="card cfg-activity-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">bar_chart</span>Atividade - últimos 7 dias</span><span class="listagem-meta"><b>${demo.logs.length}</b> registros recentes</span></div>
          <div class="cfg-activity-body">
            <div class="atividade-chart">${demo.atividade.map((n) => `<div class="atividade-bar" style="height:${Math.max(6, n * 6)}%" title="${n} ações"></div>`).join('')}</div>
            <div class="atividade-labels">${['Qui', 'Sex', 'Sáb', 'Dom', 'Seg', 'Ter', 'Qua'].map((dia, i) => `<div class="atividade-day">${dia}<br><span>${demo.atividade[i]}</span></div>`).join('')}</div>
          </div>
        </div>
        <nav class="card cfg-section-nav">
          ${configTab('usuarios', 'person', 'Usuários')}
          ${configTab('logs', 'list_alt', 'Logs')}
          ${configTab('config', 'settings', 'Gerais')}
        </nav>
        ${state.configTab === 'usuarios' ? configUsuarios() : state.configTab === 'logs' ? configLogs() : configGerais()}
      </div>
    `;
  }

  function configTab(tab, icon, label) {
    return `<button type="button" class="cfg-section-link ${state.configTab === tab ? 'active' : ''}" data-action="config-tab" data-tab="${tab}"><span class="material-symbols-outlined">${icon}</span>${label}</button>`;
  }

  function configUsuarios() {
    return `
      <section>
        <div class="card cm-table-card listagem-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">person</span>Usuários (${demo.usuarios.length})</span><button type="button" class="cm-btn-gerar" data-action="open-form" data-form="usuario"><span class="material-symbols-outlined">add</span>Novo</button></div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela", columns: ["Usuário", "Status", "Criado em", "Último acesso", "Ações"], rowsHtml: `${demo.usuarios.map((u) => `<tr><td><div class="with-avatar"><div class="avatar avatar-${(u.id % 5) + 1}">${u.usuario.slice(0, 1).toUpperCase()}</div><div class="with-avatar-text"><div class="name">${escapeHTML(u.usuario)}</div><div class="sub">${u.id === 1 ? 'Administrador' : 'Usuário padrão'}</div></div></div></td><td>${statusBadge(u.ativo ? 'ATIVO' : 'INATIVO')}</td><td class="td-muted">${dateBR(u.criado.slice(0, 10))}</td><td class="td-muted">${dateBR(u.ultimo.slice(0, 10))}</td><td><div class="cm-acoes">${actionButton('Editar', 'edit', 'open-form', 'data-form="usuario"')}<button type="button" class="btn-sec btn-mini" data-action="toast" data-message="Status alterado.">${u.ativo ? 'Desativar' : 'Ativar'}</button>${miniIcon('delete', 'Excluir', 'toast', 'data-message="Usuário excluído."')}</div></td></tr>`).join('')}`, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </section>
    `;
  }

  function configLogs() {
    return `
      <section>
        ${filtersCard(`
          <div class="row"><div class="col"><label>Usuário</label><select><option>Todos</option><option>admin</option><option>financeiro</option></select></div><div class="col"><label>Ação</label><select><option>Todas</option><option>Login</option><option>Baixa de cobrança</option></select></div><div class="col"><label>Busca</label><input placeholder="Detalhes, ação ou usuário"></div><div class="col actions"><button type="button" data-action="toast" data-message="Logs filtrados.">Filtrar</button><button type="button" class="btn-sec" data-action="toast" data-message="Filtros limpos.">Limpar</button></div></div>
        `)}
        <div class="card cm-table-card listagem-card">
          <div class="cm-table-head"><span class="cm-table-title"><span class="material-symbols-outlined">list_alt</span>Logs do Sistema (${demo.logs.length})</span></div>
          <div class="table-wrap">
            ${table({ className: "tabela cm-tabela cfg-logs-table", columns: ["Data/Hora", "Usuário", "Ação", "Detalhes"], rowsHtml: `${demo.logs.map((l) => `<tr><td class="td-muted">${dateBR(l.data.slice(0, 10))} ${l.data.slice(11, 16)}</td><td>${escapeHTML(l.usuario)}</td><td><span class="badge b-aberto">${escapeHTML(l.acao)}</span></td><td class="td-muted">${escapeHTML(l.detalhes)}</td></tr>`).join('')}`, emptyMessage: "Nenhum registro encontrado." })}
          </div>
        </div>
      </section>
    `;
  }

  function configGerais() {
    const cfg = demo.configuracoes;
    return `
      <section>
        ${form({ className: "form cfg-config-form", payment: false, content: `
          <div class="form-section">
            <div class="sec-head"><div><div class="sec-title">1) Identificação</div><div class="sec-sub">Nome exibido nos documentos e na operação</div></div></div>
            <div class="sec-body"><div class="grid"><div><label>Nome do Proprietário / Imobiliária</label><input value="${escapeHTML(cfg.nomeEmpresa)}"></div><div><label>Dias para alerta de vencimento</label><input type="number" value="${cfg.alertaVencimento}"></div><div><label>Dias para alertar contratos</label><input type="number" value="${cfg.alertaContratos}"></div></div></div>
          </div>
          <div class="form-section">
            <div class="sec-head"><div><div class="sec-title">2) Cobranças</div><div class="sec-sub">Padrões usados na criação de contratos e cobranças</div></div></div>
            <div class="sec-body"><div class="grid"><div><label>Meses de pré-geração de cobranças</label><input type="number" value="${cfg.mesesPreGeracao}"></div><div><label>Multa padrão (%)</label><input type="number" value="${cfg.multaPadrao}"></div><div><label>Juros padrão ao mês (%)</label><input type="number" value="${cfg.jurosPadrao}"></div><div><label>Token Invertexto</label><input type="password" placeholder="Token da API número por extenso"></div></div><div class="actions"><button type="submit"><span class="material-symbols-outlined">save</span>Salvar</button></div></div>
          </div>
        ` })}
      </section>
    `;
  }


  function sum(items, key, mapper) {
    return items.reduce((acc, item) => acc + (mapper ? Number(mapper(item) || 0) : Number(item[key] || 0)), 0);
  }

  function formaLabel(value) {
    return {
      PIX: 'Pix',
      CARTAO_CREDITO: 'Cartão de crédito',
      DINHEIRO: 'Dinheiro',
      '-': '-',
      '': '-'
    }[value] || value;
  }

  function router() {
    const route = (location.hash || '#inicio').replace('#', '').split('?')[0] || 'inicio';
    state.route = routeTitles[route] ? route : 'inicio';
    const routeStyles = document.getElementById('route-styles');
    if (routeStyles) routeStyles.href = `assets/css/routes/${state.route}.css`;
    closeMenu();
    view.innerHTML = renderRoute(state.route);
    document.getElementById('page-title').textContent = routeTitles[state.route];
    document.title = `${routeTitles[state.route]} - Aluga+`;
    document.querySelectorAll('.nav-item').forEach((link) => link.classList.toggle('active', link.dataset.route === state.route));
    view.focus({ preventScroll: true });
    afterRender();
  }

  function renderRoute(route) {
    return {
      inicio: renderInicio,
      controle: renderControle,
      cobrancas: renderCobrancas,
      imoveis: renderImoveis,
      inquilinos: renderInquilinos,
      contratos: renderContratos,
      relatorios: renderRelatorios,
      documentos: renderDocumentos,
      configuracoes: renderConfiguracoes
    }[route]();
  }

  function afterRender() {
    if (state.route === 'documentos') {
      updateDocPreview();
    }
  }

  function openModal(title, subtitle, content, options = {}) {
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle || '';
    modalContent.innerHTML = content;
    modalBox.classList.toggle('modal-wide', !!options.wide);
    modalRoot.classList.add('show');
    modalRoot.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modalRoot.classList.remove('show');
    modalRoot.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalContent.innerHTML = '';
  }

  function toast(message) {
    const item = document.createElement('div');
    item.className = 'toast';
    item.innerHTML = `<span class="material-symbols-outlined">check_circle</span><span>${escapeHTML(message || 'Ação concluída.')}</span>`;
    toastStack.appendChild(item);
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(8px)';
      setTimeout(() => item.remove(), 250);
    }, 2600);
  }

  function openHelp() {
    const help = helps[state.route] || helps.inicio;
    openModal(help.title, help.subtitle, `
      <div class="help-content">
        <ul class="help-list">
          ${help.bullets.map(([icon, text]) => `<li><span class="material-symbols-outlined">${icon}</span><span>${text}</span></li>`).join('')}
        </ul>
      </div>
    `);
  }

  function openPayment(id) {
    const c = demo.cobrancas.find((item) => item.id === Number(id)) || demo.cobrancas[0];
    const im = chargeImovel(c);
    const iq = chargeInquilino(c);
    const comp = chargeComposition(c);
    openModal('Registrar pagamento', `${iq.nome} · ${im.apelido} · Ref. ${refBR(c)}`, `
      ${form({ className: "modal-form form", payment: true, content: `
        <div class="baixa-resumo">
          <div class="baixa-box"><div class="t">Valor total esperado</div><div class="v">${money(c.total)}</div></div>
          <div class="baixa-box"><div class="t">Total informado</div><div class="v" id="payment-informed">${money(saldo(c))}</div></div>
        </div>
        <div class="baixa-detalhes">
          <div class="card-title"><h3>Composição da cobrança</h3></div>
          <div class="baixa-detalhes-lista">
            ${paymentDetail('Aluguel', comp.aluguel)}
            ${paymentDetail('IPTU', comp.iptu)}
            ${paymentDetail('Taxas', comp.taxas)}
            ${paymentDetail('Seguro fiança', comp.seguro)}
            ${paymentDetail('Encargos', comp.encargos)}
          </div>
        </div>
        <div class="pagamentos-wrap" id="payment-items">
          ${paymentItem(1, saldo(c), 'PIX')}
        </div>
        <button type="button" class="btn btn-add-parcela" data-action="add-payment-row">+ Adicionar pagamento</button>
        <label class="baixa-check"><input type="checkbox"><span><strong>Quitar mesmo com valor menor</strong><br><span class="small">Use quando houver negociação, desconto ou ajuste manual.</span></span></label>
        <div><label>Observação</label><textarea placeholder="Ex: desconto negociado pelo proprietário">${escapeHTML(c.obs || '')}</textarea></div>
        <div class="modal-actions"><button type="button" class="btn-sec" data-action="close-modal">Cancelar</button><button type="submit">Salvar pagamento</button></div>
      ` })}
    `, { wide: true });
    updatePaymentTotal();
  }

  function paymentDetail(label, value) {
    if (Number(value || 0) <= 0) return '';
    return `<div class="baixa-detalhe-item"><strong>${label}</strong><span>${money(value)}</span></div>`;
  }

  function paymentItem(index, value, forma) {
    return `
      <div class="pagamento-item">
        <div class="pagamento-item-top"><strong>Pagamento ${index}</strong>${index > 1 ? '<button type="button" class="btn-sec btn-mini" data-action="remove-payment-row">Remover</button>' : ''}</div>
        <div class="pagamento-grid">
          <div><label>Data do pagamento</label><input type="date" value="2026-09-16"></div>
          <div><label>Valor pago</label><input type="number" step="0.01" min="0" value="${Number(value || 0).toFixed(2)}" data-payment-value></div>
          <div><label>Forma de pagamento</label><select><option ${forma === 'PIX' ? 'selected' : ''}>Pix</option><option>Cartão de crédito</option><option>Dinheiro</option></select></div>
        </div>
      </div>
    `;
  }

  function addPaymentRow() {
    const wrap = document.getElementById('payment-items');
    if (!wrap) return;
    const index = wrap.querySelectorAll('.pagamento-item').length + 1;
    wrap.insertAdjacentHTML('beforeend', paymentItem(index, 0, 'PIX'));
    updatePaymentTotal();
  }

  function updatePaymentTotal() {
    const totalEl = document.getElementById('payment-informed');
    if (!totalEl) return;
    const total = Array.from(document.querySelectorAll('[data-payment-value]')).reduce((acc, input) => acc + Number(input.value || 0), 0);
    totalEl.textContent = money(total);
  }

  function openReceipt(id) {
    const c = demo.cobrancas.find((item) => item.id === Number(id)) || demo.cobrancas[0];
    const im = chargeImovel(c);
    const iq = chargeInquilino(c);
    openModal('Recibo de pagamento', `Cobrança #${c.id}`, `
      <div class="doc-preview is-active" style="min-height:auto;padding:30px;margin-bottom:14px">
        <h1>RECIBO DE ALUGUEL</h1>
        <p>Recebemos de <strong>${escapeHTML(iq.nome)}</strong> a importância de <strong>${money(c.recebido || c.total)}</strong>, referente à locação do imóvel situado em ${escapeHTML(im.endereco)}.</p>
        <p>Referência: ${refBR(c)}. Forma de pagamento: ${formaLabel(c.forma || 'PIX')}.</p>
        <p>Belo Horizonte, ${dateBR(c.recebimento || '2026-09-16')}.</p>
        <div class="doc-signature"><div class="doc-sign-line"><hr><div class="doc-sign-label">LOCADOR(A)</div></div><div class="doc-sign-line"><hr><div class="doc-sign-label">LOCATÁRIO(A)</div></div></div>
      </div>
      <div class="modal-actions"><button class="btn-sec" type="button" data-action="close-modal">Fechar</button><button class="btn" type="button" data-action="print-page"><span class="material-symbols-outlined">print</span>Imprimir</button></div>
    `, { wide: true });
  }

  function openForm(type) {
    const map = {
      imovel: ['Novo imóvel', 'Cadastre endereço, apelido e valores padrão mensais.', formImovel()],
      inquilino: ['Novo inquilino', 'Cadastre dados pessoais, contato e informações de Pix.', formInquilino()],
      contrato: ['Novo contrato', 'Selecione imóvel e inquilino e defina regras de pagamento.', formContrato()],
      cobranca: ['Nova cobrança', 'Crie uma cobrança avulsa ou ajuste uma cobrança existente.', formCobranca()],
      usuario: ['Usuário', 'Cadastre ou edite um acesso do sistema.', formUsuario()],
      desconto: ['Descontos do contrato', 'Registre descontos por período ou valor fixo.', formDesconto()],
      reajuste: ['Reajustes do contrato', 'Controle alterações de aluguel por vigência.', formReajuste()]
    };
    const [title, subtitle, content] = map[type] || map.cobranca;
    openModal(title, subtitle, `${form({ className: "form modal-form", payment: false, content: `${content}<div class="modal-actions"><button type="button" class="btn-sec" data-action="close-modal">Cancelar</button><button type="submit">Salvar</button></div>` })}`, { wide: ['contrato', 'imovel'].includes(type) });
  }

  function formImovel() {
    return `
      <div class="form-section"><div class="sec-head"><div><div class="sec-title">1) Identificação</div><div class="sec-sub">Apelido e endereço</div></div></div><div class="sec-body"><div class="grid"><div><label>Apelido</label><input value="Casa Jardim"></div><div><label>Endereço</label><input value="Rua das Palmeiras, 90"></div><div><label>Identificador Copasa</label><input value="COP-000000"></div><div><label>Identificador Cemig</label><input value="CEM-000000"></div></div></div></div>
      <div class="form-section"><div class="sec-head"><div><div class="sec-title">2) Valores padrão</div><div class="sec-sub">Base para cobranças do contrato</div></div></div><div class="sec-body"><div class="grid"><div><label>Aluguel</label><input value="1500,00"></div><div><label>Taxas/Condomínio</label><input value="180,00"></div><div><label>IPTU</label><input value="95,00"></div><div><label>Água</label><input value="0,00"></div><div><label>Luz</label><input value="0,00"></div><div><label>Outros</label><input value="0,00"></div></div></div></div>
    `;
  }

  function formInquilino() {
    return `<div class="grid"><div><label>Nome</label><input value="Novo Cliente"></div><div><label>CPF</label><input value="000.000.000-00"></div><div><label>Telefone (WhatsApp)</label><input value="(31) 9 0000-0000"></div><div><label>Nome de quem faz o Pix</label><input value="NOVO CLIENTE"></div></div><label>Observações</label><textarea rows="4">Observação do cadastro.</textarea>`;
  }

  function formContrato() {
    return `
      <div class="form-section"><div class="sec-head"><div><div class="sec-title">1) Vinculação</div><div class="sec-sub">Imóvel e inquilino</div></div></div><div class="sec-body"><div class="grid"><div><label>Imóvel</label><select>${demo.imoveis.map((im) => `<option>${escapeHTML(im.apelido)} - ${escapeHTML(im.endereco)}</option>`).join('')}</select></div><div><label>Inquilino</label><select>${demo.inquilinos.map((iq) => `<option>${escapeHTML(iq.nome)}</option>`).join('')}</select></div></div></div></div>
      <div class="form-section"><div class="sec-head"><div><div class="sec-title">2) Regras do contrato</div><div class="sec-sub">Pagamento e datas</div></div></div><div class="sec-body"><div class="grid"><div><label>Dia de pagamento</label><input value="5"></div><div><label>Mês de reajuste</label><input value="7"></div><div><label>Multa por atraso (%)</label><input value="2"></div><div><label>Juros mensal (%)</label><input value="1"></div><div><label>Início</label><input type="date" value="2026-09-16"></div><div><label>Término</label><input type="date" value="2027-09-15"></div></div></div></div>
      <div class="form-section"><div class="sec-head"><div><div class="sec-title">3) Garantias e valores</div><div class="sec-sub">Seguro, depósito e overrides</div></div></div><div class="sec-body"><div class="grid"><div><label>Seguro fiança</label><input value="0,00"></div><div><label>Depósito garantia</label><input value="1500,00"></div><div><label>Aluguel inicial</label><input placeholder="Usa padrão do imóvel"></div><div><label>Taxas</label><input placeholder="Opcional"></div><div><label>IPTU</label><input placeholder="Opcional"></div></div><label class="cfg-check"><input type="checkbox" checked>Contrato ativo</label><label>Observações</label><textarea rows="3"></textarea></div></div>
    `;
  }

  function formCobranca() {
    return `<div class="grid"><div><label>Contrato</label><select>${contractOptions()}</select></div><div><label>Referência</label><input value="09/2026"></div><div><label>Vencimento</label><input type="date" value="2026-09-30"></div><div><label>Valor total</label><input value="1775,00"></div><div><label>Status</label><select><option>Em aberto</option><option>Pago</option><option>Atrasado</option><option>Parcial</option></select></div></div><label>Observação</label><textarea rows="3"></textarea>`;
  }

  function formUsuario() {
    return `<div class="grid"><div><label>Nome de usuário</label><input value="novo.usuario"></div><div><label>Senha</label><input type="password" value="123456"></div><div><label>Confirmar senha</label><input type="password" value="123456"></div><div><label>Status</label><label class="cfg-check"><input type="checkbox" checked>Usuário ativo</label></div></div>`;
  }

  function formDesconto() {
    return `<div class="grid"><div><label>Contrato</label><select>${contractOptions()}</select></div><div><label>Tipo</label><select><option>Valor fixo</option><option>Percentual</option></select></div><div><label>Valor</label><input value="100,00"></div><div><label>Início</label><input type="date" value="2026-09-01"></div><div><label>Fim</label><input type="date" value="2026-12-31"></div></div><label>Motivo</label><textarea rows="3">Desconto negociado com o proprietário.</textarea>`;
  }

  function formReajuste() {
    return `<div class="grid"><div><label>Contrato</label><select>${contractOptions()}</select></div><div><label>Valor anterior</label><input value="1500,00"></div><div><label>Novo valor</label><input value="1597,50"></div><div><label>Data de vigência</label><input type="date" value="2026-10-01"></div></div><label>Observação</label><textarea rows="3">Reajuste anual pelo índice definido no contrato.</textarea>`;
  }

  function updateDocPreview() {
    if (state.route !== 'documentos') return;
    document.querySelectorAll('[data-doc-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.docPanel === state.docTab));
    document.querySelectorAll('.tab-btn[data-template]').forEach((btn) => btn.classList.toggle('active', btn.dataset.template === state.docTab));
    document.querySelectorAll('.doc-preview').forEach((preview) => {
      preview.classList.toggle('is-active', preview.id === `preview-${state.docTab}`);
    });
    const preview = document.getElementById(`preview-${state.docTab}`);
    const vars = document.getElementById('doc-vars');
    if (!preview || !vars) return;
    if (state.docTab === 'contrato') {
      const ct = contrato(Number(getValue('doc-contrato-id')) || 101) || demo.contratos[0];
      const im = contratoImovel(ct);
      const iq = contratoInquilino(ct);
      const locador = getValue('doc-locador') || 'Locador Exemplo';
      const cidade = getValue('doc-cidade') || 'Belo Horizonte';
      const uf = getValue('doc-uf') || 'Minas Gerais';
      preview.innerHTML = `
        <h1>CONTRATO DE LOCAÇÃO DE IMÓVEL</h1>
        <p>Pelo presente instrumento particular, de um lado <strong>${escapeHTML(locador)}</strong>, doravante LOCADOR(A), e de outro <strong>${escapeHTML(iq.nome)}</strong>, CPF ${cpfBR(iq.cpf)}, doravante LOCATÁRIO(A), resolvem firmar o presente contrato.</p>
        <p>O imóvel objeto da locação situa-se em <strong>${escapeHTML(im.endereco)}</strong>, com aluguel mensal de <strong>${money(im.aluguel)}</strong> (${escapeHTML(getValue('doc-valor-extenso'))}).</p>
        <p>O pagamento ocorrerá todo dia <strong>${ct.diaPagamento}</strong>, por ${escapeHTML(getValue('doc-pagamento'))}. O prazo contratual é de <strong>${escapeHTML(getValue('doc-prazo'))} meses</strong>, com início em ${dateBR(ct.inicio)} e término em ${dateBR(ct.fim)}.</p>
        <h2>Encargos e Regras</h2>
        <p>Em caso de atraso, incidirão multa de ${ct.multa}% e juros mensais de ${ct.juros}%, além das demais condições previstas no contrato.</p>
        <p>${escapeHTML(cidade)}, ${escapeHTML(uf)}, ${dateBR(getValue('doc-data') || '2026-09-16')}.</p>
        ${signature(iq.nome, locador)}
      `;
      vars.innerHTML = varsHtml([['Contrato', `#${ct.id}`], ['Imóvel', im.apelido], ['Inquilino', iq.nome], ['Aluguel', money(im.aluguel)]]);
    }
    if (state.docTab === 'despejo') {
      const iq = inquilino(Number(getValue('doc-despejo-inq')) || 1) || demo.inquilinos[0];
      preview.innerHTML = `
        <h1>NOTIFICAÇÃO EXTRAJUDICIAL DE DESPEJO</h1>
        <p><strong>Notificante:</strong> ${escapeHTML(getValue('doc-despejo-notificante') || 'Imobiliária Exemplo')}.</p>
        <p><strong>Notificado(a):</strong> ${escapeHTML(iq.nome)}, CPF ${cpfBR(iq.cpf)}, ocupante do imóvel situado em <strong>${escapeHTML(getValue('doc-despejo-endereco'))}</strong>.</p>
        <p>Fica Vossa Senhoria notificada a desocupar o imóvel no prazo de <strong>${escapeHTML(getValue('doc-despejo-prazo') || '30')} dias</strong>, em razão de inadimplência no valor de <strong>${money(getValue('doc-despejo-saldo') || 0)}</strong>.</p>
        <p>Não havendo desocupação voluntária, serão adotadas as medidas judiciais cabíveis.</p>
        ${signature(iq.nome, getValue('doc-despejo-notificante') || 'Imobiliária Exemplo')}
      `;
      vars.innerHTML = varsHtml([['Inquilino', iq.nome], ['Telefone', phoneBR(iq.telefone)], ['Saldo', money(getValue('doc-despejo-saldo') || 0)]]);
    }
    if (state.docTab === 'chaves') {
      const ct = contrato(Number(getValue('doc-chaves-contrato')) || 101) || demo.contratos[0];
      const im = contratoImovel(ct);
      const iq = contratoInquilino(ct);
      preview.innerHTML = `
        <h1>TERMO DE ENTREGA DE CHAVES</h1>
        <p>${escapeHTML(getValue('doc-chaves-entregador') || iq.nome)}, CPF ${escapeHTML(getValue('doc-chaves-cpf') || cpfBR(iq.cpf))}, declara entregar as chaves do imóvel situado em <strong>${escapeHTML(im.endereco)}</strong>.</p>
        <p>A entrega compreende o imóvel ${escapeHTML(getValue('doc-chaves-descricao'))}, ficando registrada a transferência da posse ao responsável ${escapeHTML(getValue('doc-chaves-recebedor'))}.</p>
        <p>Data da entrega: ${dateBR(getValue('doc-chaves-data') || '2026-09-16')}.</p>
        ${signature(getValue('doc-chaves-entregador') || iq.nome, getValue('doc-chaves-recebedor') || 'Responsável')}
      `;
      vars.innerHTML = varsHtml([['Contrato', `#${ct.id}`], ['Imóvel', im.apelido], ['Entregador', getValue('doc-chaves-entregador') || iq.nome]]);
    }
    if (state.docTab === 'vistoria') {
      const ct = contrato(Number(getValue('doc-vistoria-contrato')) || 101) || demo.contratos[0];
      const im = contratoImovel(ct);
      const iq = contratoInquilino(ct);
      preview.innerHTML = `
        <p><strong>LOCADOR(A):</strong> ${escapeHTML(getValue('doc-vistoria-locador') || 'Locador Exemplo')}</p>
        <p><strong>LOCATÁRIO(A):</strong> ${escapeHTML(iq.nome)}</p>
        <p><strong>IMÓVEL:</strong> ${escapeHTML(im.endereco)}</p>
        <h1>TERMO DE VISTORIA</h1>
        <p>As partes declaram que vistoriaram o imóvel e o encontraram ${escapeHTML(getValue('doc-vistoria-relatorio'))}.</p>
        <p>Finda ou rescindida a locação, o(a) locatário(a) se obriga a restituir o imóvel no estado em que recebeu, ${escapeHTML(getValue('doc-vistoria-pintura'))}.</p>
        <h2>Observações</h2>
        <p>${escapeHTML(getValue('doc-vistoria-observacoes')).replace(/\n/g, '<br>')}</p>
        ${signature(iq.nome, getValue('doc-vistoria-locador') || 'Locador')}
      `;
      vars.innerHTML = varsHtml([['Contrato', `#${ct.id}`], ['Imóvel', im.apelido], ['Locatário', iq.nome]]);
    }
  }

  function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }

  function signature(left, right) {
    return `<div class="doc-signature"><div class="doc-sign-line"><hr><div class="doc-sign-label">${escapeHTML(right)}</div></div><div class="doc-sign-line"><hr><div class="doc-sign-label">${escapeHTML(left)}</div></div></div>`;
  }

  function varsHtml(items) {
    return items.map(([key, value]) => `<div><strong>${escapeHTML(key)}</strong><span>${escapeHTML(value)}</span></div>`).join('');
  }

  function openPdfOptions() {
    openModal('Cabeçalho do PDF', 'Escolha as informações exibidas no relatório.', `
      ${form({ className: "modal-form form", payment: false, content: `
        <div class="rl-modal-opts">
          ${['Tipo do relatório', 'Período', 'Status', 'Agrupamento', 'Data de emissão', 'Quantidade', 'Total', 'Saldo'].map((label) => `<label><input type="checkbox" checked>${label}</label>`).join('')}
        </div>
        <div class="modal-actions"><button type="button" class="btn-sec" data-action="close-modal">Cancelar</button><button type="submit"><span class="material-symbols-outlined">picture_as_pdf</span>Gerar PDF</button></div>
      ` })}
    `);
  }

  function openLogin() {
    openModal('Tela de acesso', 'Entre com seu usuário e senha.', `
      <div class="login-panel">
        <div class="login-preview">
          <div><img src="assets/img/Icon.png" alt=""><h2>aluga+</h2><p>Sistema de controle de aluguéis para acompanhar imóveis, contratos, cobranças e documentos.</p></div>
          <span class="badge b-disponivel">Sistema de locações</span>
        </div>
        ${form({ className: "login-form-demo form", payment: false, content: `
          <div><label>Usuário</label><input value="admin"></div>
          <div><label>Senha</label><input type="password" value="123456"></div>
          <button type="submit">Entrar</button>
        ` })}
      </div>
    `, { wide: true });
  }

  function toggleMenu(button) {
    const id = button.dataset.menu;
    const menu = document.getElementById(id);
    if (!menu) return;
    if (state.openMenu === menu) {
      closeMenu();
      return;
    }
    closeMenu();
    document.body.appendChild(menu);
    menu.classList.add('show');
    const rect = button.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    let left = rect.left;
    let top = rect.bottom + 8;
    if (left + menuRect.width > window.innerWidth - 8) left = window.innerWidth - menuRect.width - 8;
    if (top + menuRect.height > window.innerHeight - 8) top = rect.top - menuRect.height - 8;
    menu.style.left = Math.max(8, left) + 'px';
    menu.style.top = Math.max(8, top) + 'px';
    button.setAttribute('aria-expanded', 'true');
    state.openMenu = menu;
    state.openMenuButton = button;
  }

  function closeMenu() {
    if (!state.openMenu) return;
    state.openMenu.classList.remove('show');
    state.openMenu.style.left = '';
    state.openMenu.style.top = '';
    if (state.openMenuButton) state.openMenuButton.setAttribute('aria-expanded', 'false');
    state.openMenu = null;
    state.openMenuButton = null;
  }

  function setupChrome() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('alugaplus-demo-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    document.getElementById('topbar-date').textContent = demoDate.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
    document.getElementById('theme-toggle').addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('alugaplus-demo-theme', next);
      updateThemeIcon(next);
    });
    document.getElementById('sidebar-collapse-btn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
      document.body.classList.toggle('sidebar-collapsed');
    });
    document.getElementById('sidebar-restore-btn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('collapsed');
      document.body.classList.remove('sidebar-collapsed');
    });
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.add('mobile-open');
      document.getElementById('sidebar-overlay').classList.add('active');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);
    document.getElementById('help-button').addEventListener('click', openHelp);
  }

  function closeMobileSidebar() {
    document.getElementById('sidebar').classList.remove('mobile-open');
    document.getElementById('sidebar-overlay').classList.remove('active');
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? 'dark_mode' : 'light_mode';
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) {
      if (state.openMenu && !event.target.closest('.row-menu')) closeMenu();
      return;
    }
    const action = target.dataset.action;
    if (!['toggle-menu'].includes(action)) closeMenu();

    if (action === 'close-modal') closeModal();
    if (action === 'open-login') openLogin();
    if (action === 'open-form') openForm(target.dataset.form);
    if (action === 'toast') toast(target.dataset.message);
    if (action === 'open-payment') openPayment(target.dataset.id);
    if (action === 'open-receipt') openReceipt(target.dataset.id);
    if (action === 'add-payment-row') addPaymentRow();
    if (action === 'remove-payment-row') {
      target.closest('.pagamento-item')?.remove();
      updatePaymentTotal();
    }
    if (action === 'toggle-detail') {
      const row = document.getElementById(target.dataset.target);
      if (row) {
        const willOpen = !row.classList.contains('show');
        row.classList.toggle('show', willOpen);
        target.classList.toggle('open', willOpen);
        target.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }
    }
    if (action === 'toggle-menu') {
      event.stopPropagation();
      toggleMenu(target);
    }
    if (action === 'month-prev') {
      state.month -= 1;
      if (state.month < 1) { state.month = 12; state.year -= 1; }
      router();
    }
    if (action === 'month-next') {
      state.month += 1;
      if (state.month > 12) { state.month = 1; state.year += 1; }
      router();
    }
    if (action === 'month-today') {
      state.month = 9;
      state.year = 2026;
      router();
    }
    if (action === 'report-tab') {
      state.reportType = target.dataset.report;
      router();
    }
    if (action === 'config-tab') {
      state.configTab = target.dataset.tab;
      router();
    }
    if (action === 'doc-tab') {
      state.docTab = target.dataset.template;
      updateDocPreview();
    }
    if (action === 'doc-template') {
      state.docTab = target.dataset.template;
      location.hash = '#documentos';
      setTimeout(updateDocPreview, 0);
    }
    if (action === 'update-doc') {
      updateDocPreview();
      toast('Documento atualizado na prévia.');
    }
    if (action === 'print-doc' || action === 'print-page') {
      toast('A janela de impressão do navegador será aberta.');
      setTimeout(() => window.print(), 120);
    }
    if (action === 'open-pdf-options') openPdfOptions();
    if (action === 'whatsapp') {
      const c = demo.cobrancas.find((item) => item.id === Number(target.dataset.id));
      const iq = c ? chargeInquilino(c) : null;
      toast(`Mensagem de WhatsApp preparada para ${iq ? iq.nome : 'o inquilino'}.`);
    }
    if (action === 'whatsapp-tenant') {
      const iq = inquilino(target.dataset.id);
      toast(`Mensagem de WhatsApp preparada para ${iq ? iq.nome : 'o inquilino'}.`);
    }
  });

  document.addEventListener('submit', (event) => {
    if (!event.target.matches('[data-demo-submit]')) return;
    event.preventDefault();
    toast('Dados salvos com sucesso.');
    if (event.target.closest('#modal-root')) {
      setTimeout(closeModal, 350);
    }
  });

  document.addEventListener('input', (event) => {
    if (event.target.matches('[data-payment-value]')) updatePaymentTotal();
    if (state.route === 'documentos' && event.target.closest('.documentos-page')) updateDocPreview();
  });

  document.addEventListener('change', (event) => {
    if (state.route === 'documentos' && event.target.closest('.documentos-page')) updateDocPreview();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      closeModal();
      closeMobileSidebar();
    }
  });

  window.addEventListener('hashchange', () => {
    closeMobileSidebar();
    router();
  });
  window.addEventListener('resize', closeMenu);
  window.addEventListener('scroll', closeMenu, true);

  setupChrome();
  router();
})();
