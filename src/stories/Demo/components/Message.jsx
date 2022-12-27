export function Message({ message, handleInputChange, setMessage }) {
  return (
    <fieldset>
      <legend>Message</legend>
      <input value={message} onChange={handleInputChange(setMessage)} />
    </fieldset>
  );
}
