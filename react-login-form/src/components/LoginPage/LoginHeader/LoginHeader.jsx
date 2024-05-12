import "./LoginHeader.css";

export default function LoginHeader({ children }) {
  return (
    <>
      <header className="login-page-header">
        <h1 className="login-page-heading">{children}</h1>
      </header>
    </>
  );
}
