import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "virtual:uno.css";
import "./index.css";

import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <div className="bg-100">
            <Navbar />
            <App />
            <Footer />
        </div>
    </StrictMode>,
);
