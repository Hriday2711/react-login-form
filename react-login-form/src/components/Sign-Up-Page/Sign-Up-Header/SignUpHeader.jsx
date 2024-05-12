import "./SignUpHeader.css";

export default function SignUpHeader({ children }) {
  return (
    <>
      <header className="signup-page-header">
        <h1 className="signup-page-heading">{children}</h1>
      </header>
    </>
  );
}
