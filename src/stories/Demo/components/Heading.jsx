export function Heading({ heading, handleInputChange, setHeading }) {
  return (
    <fieldset>
      <legend>Heading</legend>
      <input
        value={heading}
        onChange={handleInputChange(setHeading)}
        required
      />
    </fieldset>
  );
}
