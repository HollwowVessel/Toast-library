import { outAnimations } from "helpers/animations";

export function OutAnimation({ handleRadioOutAnimationChange, outAnimation }) {
  return (
    <fieldset>
      <legend>Out animation</legend>
      <label>
        <input
          type="radio"
          name="outAnimation"
          value={undefined}
          checked={!outAnimation}
          onChange={handleRadioOutAnimationChange}
        />
        None
      </label>
      {Object.keys(outAnimations).map((animationName) => (
        <label key={animationName}>
          <input
            type="radio"
            name="outAnimation"
            value={animationName}
            checked={outAnimation === animationName}
            onChange={handleRadioOutAnimationChange}
          />
          {animationName
            .split("-")
            .map((word, idx) =>
              idx === 0
                ? word[0].toUpperCase() + word.toLowerCase().slice(1)
                : word.toLowerCase()
            )
            .join(" ")}
        </label>
      ))}
    </fieldset>
  );
}
