import "./InputField.css";

export default function InputField({
  labelName,
  labelForAttribute,
  inputType,
}) {
  return (
    <>
      <div className="input-field">
        <label htmlFor={labelForAttribute} className="input-label">
          {labelName}
        </label>
        <input
          className="input-element"
          type={inputType}
          name={labelForAttribute}
          id={labelForAttribute}
        />
      </div>
    </>
  );
}
