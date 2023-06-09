import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ProtectedPage from "./components/ProtectedPage";
import MainLayoutComponent from "./components/MainLayoutComponent";
import UserForm from "./components/Form_register";
import LoginForm from "./components/Form_login";
import JobPosting from "./components/JobPosting";
import CardList from "./components/CardList";
import { UserProvider } from "./components/UserContext";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayoutComponent />} />
            <Route path="/protected/*" element={<ProtectedPage />} />
            <Route path="/register" element={<UserForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/jobsposting" element={<JobPosting />} />
            <Route path="/jobs/*" element={<CardList />} />
            <Route path="/jobs/:id" element={<CardDetail />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
