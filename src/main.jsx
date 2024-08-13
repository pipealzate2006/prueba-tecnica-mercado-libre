import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsContextProvider } from "./context/ProductsContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </StrictMode>
);
