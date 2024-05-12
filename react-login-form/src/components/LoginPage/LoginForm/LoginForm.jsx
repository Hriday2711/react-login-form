import "./LoginForm.css";
import InputField from "../../InputField/InputField.jsx";
import Button from "../../Button/Button";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ onSubmit }) {
  //States are declared here
  const [emailInput, setEmailInput] = useState(""); //declaring the state for email input field
  const [passwordInput, setPasswordInput] = useState(""); //declaring the state for password input field
  const [isSignInClicked, setIsSignInClicked] = useState(false); //declaring the state for sign in button whether it is clicked or not

  //Function to handle the click event on Sign-In Button of the Login Form
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Sign In Clicked!`);
    setIsSignInClicked(true);
    //checking if user has entered valid email and password input on the login form
    if (emailInput && passwordInput && isSignInClicked) {
      onSubmit();
    } else {
      return;
    }
  }

  //Function to handle the email-input value change
  function handleEmailInput(event) {
    setEmailInput(event.target.value);
  }

  //Function to handle the password-input value change
  function handlePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  return (
    <>
      {emailInput && passwordInput && isSignInClicked && (
        <section className="heading">
          <h1 className="form-heading">You have successfully logged in!!</h1>
        </section>
      )}
      <div className="login-form-container">
        <section className="heading">
          <h1 className="form-heading">Login</h1>
        </section>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* EMAIL INPUT FOR LOGIN PAGE */}
          <InputField
            labelName={"Email"}
            labelForAttribute={"email"}
            inputType={"email"}
            tabIndex={1}
            value={emailInput}
            onChange={handleEmailInput}
            isSubmitClicked={isSignInClicked}
            placeHolder="Enter your email"
          />
          {/* PASSWORD INPUT FOR LOGIN PAGE */}
          <InputField
            labelName={"Password"}
            labelForAttribute={"password"}
            inputType={"password"}
            tabIndex={2}
            value={passwordInput}
            onChange={handlePasswordInput}
            isSubmitClicked={isSignInClicked}
            placeHolder="Enter your password"
          />
          {/* SIGN-IN BUTTON FOR LOGIN PAGE */}
          <Button buttonType={"submit"} tabIndex={3}>
            SIGN IN
          </Button>
          <Link className="nav-link" to="/password-reset">
            Forgot your password?
          </Link>
          <Link className="nav-link" to="/signup">
            Create a new account - Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}
