import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserForm from "../components/Form_register";
import LoginForm from "../components/Form_login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<UserForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
