import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = "api"; // Definindo o namespace para '/api'

    // Definindo a rota GET para '/api/transactions'
    this.get("/transactions", () => {
      return this.schema.all("transacion");
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
