import "./InputField.css";
import InlineError from "../Inline Error Message/InlineError";

export default function InputField({
  labelName,
  labelForAttribute,
  inputType,
  tabIndex = 0,
  value,
  onChange,
  isSubmitClicked,
  placeHolder,
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
          tabIndex={tabIndex}
          value={value}
          onChange={(event) => onChange(event)}
          placeholder={placeHolder}
        />
        {isSubmitClicked && !value && <InlineError inputError={labelName} />}
      </div>
    </>
  );
}
