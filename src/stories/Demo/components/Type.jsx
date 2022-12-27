export function Type({ type, handleRadioTypeChange }) {
  return (
    <fieldset>
      <legend>Type</legend>
      <label>
        <input
          type="radio"
          name="type"
          value="information"
          checked={type === "information"}
          onChange={handleRadioTypeChange}
        />
        Information
      </label>

      <label>
        <input
          type="radio"
          name="type"
          value="warning"
          checked={type === "warning"}
          onChange={handleRadioTypeChange}
        />
        Warning
      </label>

      <label>
        <input
          type="radio"
          name="type"
          value="error"
          checked={type === "error"}
          onChange={handleRadioTypeChange}
        />
        Error
      </label>

      <label>
        <input
          type="radio"
          name="type"
          value="success"
          checked={type === "success"}
          onChange={handleRadioTypeChange}
        />
        Success
      </label>
    </fieldset>
  );
}
