export function Color({ color, handleRadioColorChange }) {
  return (
    <fieldset>
      <legend>Color</legend>
      <label>
        <input
          type="radio"
          name="color"
          value="yellow"
          checked={color === "yellow"}
          onChange={handleRadioColorChange}
        />
        Yellow
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={color === "red"}
          onChange={handleRadioColorChange}
        />
        Red
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="green"
          checked={color === "green"}
          onChange={handleRadioColorChange}
        />
        Green
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="purple"
          checked={color === "purple"}
          onChange={handleRadioColorChange}
        />
        Purple
      </label>
    </fieldset>
  );
}
