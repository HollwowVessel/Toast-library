export function AnimationTime({
  animationTime,
  handleInputChange,
  setAnimationTime,
}) {
  return (
    <fieldset>
      <legend>Animation Time</legend>
      <input
        value={animationTime}
        onChange={handleInputChange(setAnimationTime)}
        type="number"
        step={1000}
      />
    </fieldset>
  );
}
