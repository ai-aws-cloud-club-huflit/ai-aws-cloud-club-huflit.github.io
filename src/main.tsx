import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "@unocss/reset/tailwind-compat.css";

import "virtual:uno.css";

import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-100">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
