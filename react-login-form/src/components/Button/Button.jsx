import "./Button.css";

export default function Button({ buttonType, children, tabIndex = 0 }) {
  return (
    <>
      <div className="button">
        <button type={buttonType} className="btn" tabIndex={tabIndex}>
          {children}
        </button>
      </div>
    </>
  );
}
