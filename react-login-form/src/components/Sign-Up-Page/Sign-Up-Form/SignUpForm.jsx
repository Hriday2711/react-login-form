import "./SignUpForm.css";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUpForm() {
  const [nameInput, setNameInput] = useState(""); //declaring the state for the name input field
  const [emailInput, setEmailInput] = useState(""); //declaring the state for email input field
  const [passwordInput, setPasswordInput] = useState(""); //declaring the state for password input field
  const [isSignUpClicked, setIsSignUpClicked] = useState(false); //declaring the state for sign in button whether it is clicked or not

  function signUpClick(event) {
    event.preventDefault(); //preventing the page to refresh on submit
    console.log("Sign Up clicked");
    setIsSignUpClicked(true);
  }

  //Function to handle the name input field value change
  function handleNameInput(event) {
    setNameInput(event.target.value);
  }

  //Function to handle the email input field change
  function handleEmailInput(event) {
    setEmailInput(event.target.value);
  }

  //Function to handle the password input field change
  function handlePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  return (
    <div className="signup-form-container">
      <section className="signup-heading">
        <h1 className="signup-form-heading">Create a New Account</h1>
      </section>
      <form className="signup-form">
        {/* NAME INPUT FIELD FOR SIGN-UP PAGE */}
        <InputField
          inputType="text"
          placeHolder="Enter your name"
          labelName="Name"
          labelForAttribute="name"
          value={nameInput}
          tabIndex={1}
          onChange={handleNameInput}
          isSubmitClicked={isSignUpClicked}
        />
        {/* EMAIL INPUT FOR SIGN-UP PAGE */}
        <InputField
          labelName="Email"
          labelForAttribute="email"
          inputType="email"
          tabIndex={2}
          placeHolder="Enter your email"
          value={emailInput}
          onChange={handleEmailInput}
          isSubmitClicked={isSignUpClicked}
        />
        {/* PASSWORD INPUT FOR SIGN-UP PAGE */}
        <InputField
          labelName="Password"
          labelForAttribute="password"
          inputType="password"
          tabIndex={3}
          placeHolder="Enter your password"
          value={passwordInput}
          onChange={handlePasswordInput}
          isSubmitClicked={isSignUpClicked}
        />
        {/* SIGN-UP BUTTON FOR SIGN-UP PAGE */}
        <Button buttonType={"submit"} tabIndex={4} onClick={signUpClick}>
          SIGN UP
        </Button>
      </form>
      {/* Navigation link for Password Reset page */}
      <Link className="nav-link" to="/">
        Already have an account? Log In
      </Link>
    </div>
  );
}
