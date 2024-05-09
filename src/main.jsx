import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { GlobaStyle } from "./styles/style";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Providers>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
      />
      <GlobaStyle />
      <App />
    </Providers>
  </BrowserRouter>
);
