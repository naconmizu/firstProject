import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "../public/index.css";


const root = createRoot(document.getElementById("root"));
root.render(<App />);
