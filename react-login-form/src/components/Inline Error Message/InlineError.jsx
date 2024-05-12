import "./InlineError.css";

export default function InlineError({ inputError }) {
  return (
    <>
      <div className="inline-error">
        <p className="error-message">{`Please enter your ${inputError}.`}</p>
      </div>
    </>
  );
}
