# Aluga+

Demonstração comercial front-end do Aluga+, construída em React e Vite. Os dados são fictícios e permanecem apenas no navegador.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5010. Desenvolvimento e preview usam a porta 5010, sem trocar automaticamente caso ela esteja ocupada.

## Componentes compartilhados

`src/components/Table.jsx` centraliza cabeçalhos, corpo e estado vazio das tabelas.
`src/components/Form.jsx` centraliza os formulários de cadastro, filtros, pagamento, configurações e login.
`src/components/Report.jsx` apresenta os relatórios geral, por imóvel, por inquilino e por contrato.
`src/components/ui.js` reúne indicadores, badges, botões de ação e painéis de filtros.

As telas em `legacyApp.js` fornecem dados, colunas e conteúdo específico. `renderMarkup.js` converte os componentes React para o HTML utilizado pelos eventos delegados existentes. Os campos e linhas em HTML devem receber apenas conteúdo da aplicação, com valores externos escapados.

Execute `npm test` para verificar navegação, relatórios, formulários, expansão de linhas, pagamentos e tabelas vazias.

## Gerar versão de produção

```bash
npm run build
```

O conteúdo pronto para publicação será criado em `dist/`.

## GitHub Pages

O projeto inclui o workflow `.github/workflows/deploy-pages.yml`. No repositório do GitHub, abra **Settings > Pages** e selecione **GitHub Actions** como fonte de publicação. Cada envio para a branch `main` publicará a versão mais recente.

## Escopo

A demonstração inclui Início, Controle Mensal, Cobranças, Imóveis, Inquilinos, Contratos, Relatórios, Documentos e Configurações. O módulo de talões não faz parte desta apresentação.
