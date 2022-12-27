export function Duration({ duration, handleInputChange, setDuration }) {
  return (
    <fieldset>
      <legend>Duration</legend>
      <input
        value={duration}
        onChange={handleInputChange(setDuration)}
        type="number"
        step={1000}
      />
    </fieldset>
  );
}
