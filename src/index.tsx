import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    // Verificando se os dados estão sendo carregados corretamente
    console.log("Carregando os dados...");
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          type: "deposit",
          category: "Dev",
          amount: 3000,
          createdAt: new Date("2024-12-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 2000,
          createdAt: new Date("2024-12-28 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api"; // Definindo o namespace para '/api'

    // Definindo a rota GET para '/api/transactions'
    this.get("/transactions", () => {
      // Verificando se o servidor MirageJS tem as transações
      console.log("Transações carregadas:", this.schema.all("transaction"));
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
