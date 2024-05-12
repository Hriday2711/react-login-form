import "./Button.css";

export default function Button({
  buttonType,
  children,
  tabIndex = 0,
  onClick,
}) {
  return (
    <>
      <div className="button">
        <button
          type={buttonType}
          className="btn"
          tabIndex={tabIndex}
          onClick={(event) => onClick(event)}
        >
          {children}
        </button>
      </div>
    </>
  );
}
