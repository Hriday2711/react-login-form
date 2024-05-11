import "./Link.css";

export default function Link({ children }) {
  return (
    <>
      <a href="/" className="nav-link">
        {children}
      </a>
    </>
  );
}
