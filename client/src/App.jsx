import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
