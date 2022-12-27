import { inAnimations } from "helpers/animations";

export function InAnimation({ inAnimation, handleRadioInAnimationChange }) {
  return (
    <fieldset>
      <legend>In animation</legend>
      <label>
        <input
          type="radio"
          name="inAnimation"
          value={undefined}
          checked={!inAnimation}
          onChange={handleRadioInAnimationChange}
        />
        None
      </label>
      {Object.keys(inAnimations).map((animationName) => (
        <label key={animationName}>
          <input
            type="radio"
            name="inAnimation"
            value={animationName}
            checked={inAnimation === animationName}
            onChange={handleRadioInAnimationChange}
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
