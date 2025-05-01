import { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
