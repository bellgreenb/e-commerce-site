import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { CartProvider } from "./context/CartProvider.tsx";
import { ProductsProvider } from "./context/ProductsProvider.tsx";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
