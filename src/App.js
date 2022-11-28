import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import Login from "../src/pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
