import "./Button.css";

export default function Button({ buttonType, children }) {
  return (
    <>
      <div className="button">
        <button type={buttonType} className="btn">
          {children}
        </button>
      </div>
    </>
  );
}
