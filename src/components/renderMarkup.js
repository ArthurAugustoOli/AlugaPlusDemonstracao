import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Table from './Table.jsx';
import Form from './Form.jsx';
import Report from './Report.jsx';

// Bridge between reusable React components and the current delegated DOM events.
export const table = (props) => renderToStaticMarkup(createElement(Table, props));
export const form = (props) => renderToStaticMarkup(createElement(Form, props));
export const report = (props) => renderToStaticMarkup(createElement(Report, props));
