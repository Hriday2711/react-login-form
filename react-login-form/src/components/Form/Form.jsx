import "./Form.css";
import InputField from "../InputField/InputField.jsx";
import Links from "../Link/Links.jsx";
import Button from "../Button/Button";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  //States are declared here
  const [emailInput, setEmailInput] = useState(""); //declaring the state for email input field
  const [passwordInput, setPasswordInput] = useState(""); //declaring the state for password input field
  const [isSignInClicked, setIsSignInClicked] = useState(false); //declaring the state for sign in button whether it is clicked or not

  //Function to handle the click event on Sign-In Button of the Login Form
  function signInClick(event) {
    event.preventDefault();
    console.log(`Sign In Clicked!`);
    setIsSignInClicked(true);
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
      <div className="form-container">
        <section className="heading">
          <h1 className="form-heading">Login</h1>
        </section>
        <form className="login-form">
          {/* EMAIL INPUT FOR LOGIN PAGE */}
          <InputField
            labelName={"Email"}
            labelForAttribute={"email"}
            inputType={"email"}
            tabIndex={1}
            value={emailInput}
            onChange={handleEmailInput}
            isSignInClicked={isSignInClicked}
          />
          {/* PASSWORD INPUT FOR LOGIN PAGE */}
          <InputField
            labelName={"Password"}
            labelForAttribute={"password"}
            inputType={"password"}
            tabIndex={2}
            value={passwordInput}
            onChange={handlePasswordInput}
            isSignInClicked={isSignInClicked}
          />
          {/* SIGN-IN BUTTON FOR LOGIN PAGE */}
          <Button buttonType={"submit"} tabIndex={3} onClick={signInClick}>
            SIGN IN
          </Button>
        </form>
        <section className="links-section">
          <ul className="linkList">
            <li>
              <Link to="/password-reset">
                <Links>Forgot your password?</Links>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Links>Create a new account - Sign Up</Links>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
