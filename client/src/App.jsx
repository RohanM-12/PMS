import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/SignUp";
import HomePage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
export default App;
