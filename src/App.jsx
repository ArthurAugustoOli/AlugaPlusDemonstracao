import { useEffect } from 'react';

const Icon = ({ children, id, style }) => (
  <span className="material-symbols-outlined" id={id} style={style}>{children}</span>
);

const navigation = [
  { section: 'Principal' },
  { route: 'inicio', icon: 'dashboard', label: 'Início' },
  { route: 'controle', icon: 'calendar_month', label: 'Controle Mensal' },
  { route: 'cobrancas', icon: 'payments', label: 'Cobranças' },
  { route: 'imoveis', icon: 'apartment', label: 'Imóveis' },
  { route: 'inquilinos', icon: 'group', label: 'Inquilinos' },
  { route: 'contratos', icon: 'description', label: 'Contratos' },
  { section: 'Análise' },
  { route: 'relatorios', icon: 'analytics', label: 'Relatórios' },
  { route: 'documentos', icon: 'article', label: 'Documentos' },
  { section: 'Sistema' },
  { route: 'configuracoes', icon: 'settings', label: 'Configurações' },
];

function Sidebar() {
  return (
    <>
      <div id="sidebar-overlay" className="sidebar-overlay" />
      <nav className="sidebar" id="sidebar" aria-label="Navegação principal">
        <div className="sidebar-brand">
          <a className="brand-icon" href="#inicio" aria-label="Ir para o início">
            <img src="./assets/img/Icon.png" alt="Aluga+" />
          </a>
          <a className="sidebar-brand-text" href="#inicio">aluga<span>+</span></a>
          <div className="sidebar-controls">
            <button className="sidebar-ctrl-btn" id="theme-toggle" title="Alternar tema" type="button">
              <Icon id="theme-icon" style={{ fontSize: 16 }}>light_mode</Icon>
            </button>
            <button className="sidebar-ctrl-btn" id="sidebar-collapse-btn" title="Recolher menu" type="button">
              <Icon style={{ fontSize: 16 }}>menu</Icon>
            </button>
          </div>
        </div>

        <div className="sidebar-nav">
          {navigation.map((item, index) => item.section ? (
            <div className="nav-section-label" style={index > 0 ? { marginTop: 8 } : undefined} key={item.section}>{item.section}</div>
          ) : (
            <a className="nav-item" data-route={item.route} href={`#${item.route}`} key={item.route}>
              <span className="nav-icon"><Icon>{item.icon}</Icon></span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-avatar">AD</div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">Admin</div>
            <div className="sidebar-user-role">Administrador</div>
          </div>
          <button className="sidebar-footer-btn" type="button" data-action="open-login" title="Sair">
            <Icon style={{ fontSize: 16 }}>logout</Icon><span>Sair</span>
          </button>
        </div>
      </nav>
    </>
  );
}

function App() {
  useEffect(() => {
    import('./legacyApp.js');
  }, []);

  return (
    <>
      <div className="app-shell">
        <Sidebar />
        <div className="content-wrap">
          <header className="topbar">
            <button className="mobile-menu-btn" id="mobile-menu-btn" type="button" aria-label="Abrir menu"><Icon>menu</Icon></button>
            <button className="desktop-sidebar-restore-btn" id="sidebar-restore-btn" type="button" title="Abrir menu"><Icon>menu_open</Icon></button>
            <div className="topbar-title" id="page-title">Início</div>
            <div className="topbar-right">
              <span id="topbar-date" className="topbar-date" />
              <button className="help-lantern" id="help-button" type="button" title="Explicar esta tela" aria-label="Explicar esta tela"><Icon>flashlight_on</Icon></button>
            </div>
          </header>
          <main className="page-content" id="app-view" tabIndex="-1">
            <div className="demo-loading"><Icon>hourglass_empty</Icon>Carregando...</div>
          </main>
        </div>
      </div>

      <div className="modal-backdrop demo-modal" id="modal-root" aria-hidden="true">
        <div className="modal-box demo-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-head">
            <div><h3 id="modal-title">Aluga+</h3><p id="modal-subtitle" /></div>
            <button className="modal-close-x" type="button" data-action="close-modal" aria-label="Fechar"><Icon>close</Icon></button>
          </div>
          <div id="modal-content" />
        </div>
      </div>
      <div className="toast-stack" id="toast-stack" aria-live="polite" aria-atomic="true" />
    </>
  );
}

export default App;
