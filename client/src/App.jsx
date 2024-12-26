import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/SignUp";
import HomePage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import AppointmentPage from "./pages/AppointmentPage";
import PaymentSuccess from "./pages/Booked";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="booked" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}
export default App;
