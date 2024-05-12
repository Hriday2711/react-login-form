import LoginHeader from "../LoginPage/LoginHeader/LoginHeader.jsx";
import LoginForm from "../LoginPage/LoginForm/LoginForm.jsx";
import { useState } from "react";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //state to check whether the user successfully logged in or not

  function verifySubmit() {
    setIsLoggedIn(true);
    console.log("User logged in");
  }

  return (
    <>
      <LoginHeader>
        {isLoggedIn
          ? "You have successfully logged in!!"
          : "Welcome to Login Page"}
      </LoginHeader>
      {isLoggedIn ? null : <LoginForm onSubmit={verifySubmit} />}
    </>
  );
}
