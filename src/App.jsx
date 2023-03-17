import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ProtectedPage from "./components/ProtectedPage";
import MainLayoutComponent from "./components/MainLayoutComponent";
import UserForm from "./components/Form_register";
import LoginForm from "./components/Form_login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayoutComponent />} />
          <Route path="/protected/*" element={<ProtectedPage />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
