export function CloseIconColor({
  closeIconColor,
  handleRadioCloseIconColorChange,
}) {
  return (
    <fieldset>
      <legend>Color of close icon</legend>
      <label>
        <input
          type="radio"
          name="closeIconColor"
          value="black"
          checked={closeIconColor === "black"}
          onChange={handleRadioCloseIconColorChange}
        />
        Black
      </label>

      <label>
        <input
          type="radio"
          name="closeIconColor"
          value="white"
          checked={closeIconColor === "white"}
          onChange={handleRadioCloseIconColorChange}
        />
        White
      </label>
    </fieldset>
  );
}
