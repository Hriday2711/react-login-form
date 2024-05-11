import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Form from "../Form/Form";

export default function App() {
  return (
    <>
      <div className="container">
        <Header>Welcome to Login Page</Header>
        <Form />
      </div>
    </>
  );
}
