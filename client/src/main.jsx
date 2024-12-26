import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Header />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
