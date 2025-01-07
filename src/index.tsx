import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App type='resume' />
  </React.StrictMode>,
);
