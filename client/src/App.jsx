import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
export default App;
