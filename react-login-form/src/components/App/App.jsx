import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage.jsx";
import SignUpPage from "../Sign-Up-Page/SignUpPage";
import ForgotPassword from "../Forgot-Password-page/ForgotPassword";

export default function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} exact />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/password-reset" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
