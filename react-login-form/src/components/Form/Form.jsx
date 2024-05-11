import "./Form.css";
import InputField from "../InputField/InputField.jsx";
import Link from "../Link/Link.jsx";
import Button from "../Button/Button";

export default function Form() {
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
          />
          {/* PASSWORD INPUT FOR LOGIN PAGE */}
          <InputField
            labelName={"Password"}
            labelForAttribute={"password"}
            inputType={"password"}
          />
          {/* LOGIN BUTTON FOR LOGIN PAGE */}
          <Button buttonType={"submit"}>SIGN IN</Button>
        </form>
        <Link>Forgot your password?</Link>
        <Link>Create a new account - Sign Up</Link>
      </div>
    </>
  );
}
