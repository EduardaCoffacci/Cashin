import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'; // Definindo o namespace para '/api'

    // Definindo a rota GET para '/api/transactions'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date(),
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
