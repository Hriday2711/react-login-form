import "./Links.css";

export default function Links({ children }) {
  return (
    <>
      <a href="/" className="nav-link">
        {children}
      </a>
    </>
  );
}
