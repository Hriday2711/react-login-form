import "./Header.css";

export default function Header({ children }) {
  return (
    <>
      <header className="page-header">
        <h1 className="page-heading">{children}</h1>
      </header>
    </>
  );
}
