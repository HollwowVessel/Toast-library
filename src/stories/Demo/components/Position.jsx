export function Position({ position, handleRadioPositionChange }) {
  return (
    <fieldset>
      <legend>Position</legend>
      <label>
        <input
          type="radio"
          name="position"
          value="topLeft"
          checked={position === "topLeft"}
          onChange={handleRadioPositionChange}
        />
        Top left
      </label>

      <label>
        <input
          type="radio"
          name="position"
          value="topRight"
          checked={position === "topRight"}
          onChange={handleRadioPositionChange}
        />
        Top right
      </label>

      <label>
        <input
          type="radio"
          name="position"
          value="bottomLeft"
          checked={position === "bottomLeft"}
          onChange={handleRadioPositionChange}
        />
        Bottom left
      </label>

      <label>
        <input
          type="radio"
          name="position"
          value="bottomRight"
          checked={position === "bottomRight"}
          onChange={handleRadioPositionChange}
        />
        Bottom right
      </label>
    </fieldset>
  );
}
