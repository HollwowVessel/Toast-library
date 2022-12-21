import React, { useState } from 'react';

import { ToastManager } from 'services/singleton';
import { ToastContainer } from 'containers/ToastContainer';
import { inAnimations, outAnimations } from 'helpers/animations';
import { useToast } from 'hooks/index';

import { Form } from './styled';

export const Demo = () => {
  const [heading, setHeading] = useState('Basic header');
  const [message, setMessage] = useState('Lorem ipsum...');
  const [duration, setDuration] = useState(3000);

  const [color, setColor] = useState('yellow');
  const [closeIconColor, setCloseIconColor] = useState('white');
  const [animationTime, setAnimationTime] = useState(1000);

  const [type, setType] = useState('information');
  const [position, setPosition] = useState('bottomLeft');
  const [inAnimation, setInAnimation] = useState('appearance');
  const [outAnimation, setOutAnimation] = useState('left-slide-out');

  const { showInfoToast, showErrorToast, showSuccessToast, showWarningToast } =
    useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      heading,
      message,
      duration: Number(duration),
      inAnimationName: inAnimation,
      outAnimationName: outAnimation,
      animationTime: Number(animationTime),
      color,
      closeIconColor,
    };

    switch (type) {
      case 'information':
        showInfoToast(options);
        break;
      case 'warning':
        showWarningToast(options);
        break;
      case 'success':
        showSuccessToast(options);
        break;
      case 'error':
        showErrorToast(options);
        break;
    }
  };

  const handleInputChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleRadioColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleRadioCloseIconColorChange = (event) => {
    setCloseIconColor(event.target.value);
  };

  const handleRadioTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleRadioPositionChange = (event) => {
    ToastManager.setPosition(event.target.value);
    setPosition(event.target.value);
  };

  const handleRadioInAnimationChange = (event) => {
    setInAnimation(event.target.value);
  };

  const handleRadioOutAnimationChange = (event) => {
    setOutAnimation(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
      <fieldset>
        <legend>Heading</legend>
        <input
          value={heading}
          onChange={handleInputChange(setHeading)}
          required
        />
      </fieldset>
      <fieldset>
        <legend>Message</legend>
        <input value={message} onChange={handleInputChange(setMessage)} />
      </fieldset>
      <fieldset>
        <legend>Duration</legend>
        <input
          value={duration}
          onChange={handleInputChange(setDuration)}
          type='number'
          step={1000}
        />
      </fieldset>
      <fieldset>
        <legend>Type</legend>
        <label>
          <input
            type='radio'
            name='type'
            value='information'
            checked={type === 'information'}
            onChange={handleRadioTypeChange}
          />
          Information
        </label>

        <label>
          <input
            type='radio'
            name='type'
            value='warning'
            checked={type === 'warning'}
            onChange={handleRadioTypeChange}
          />
          Warning
        </label>

        <label>
          <input
            type='radio'
            name='type'
            value='error'
            checked={type === 'error'}
            onChange={handleRadioTypeChange}
          />
          Error
        </label>

        <label>
          <input
            type='radio'
            name='type'
            value='success'
            checked={type === 'success'}
            onChange={handleRadioTypeChange}
          />
          Success
        </label>
      </fieldset>
      <fieldset>
        <legend>Color</legend>
        <label>
          <input
            type='radio'
            name='color'
            value='yellow'
            checked={color === 'yellow'}
            onChange={handleRadioColorChange}
          />
          Yellow
        </label>

        <label>
          <input
            type='radio'
            name='color'
            value='red'
            checked={color === 'red'}
            onChange={handleRadioColorChange}
          />
          Red
        </label>

        <label>
          <input
            type='radio'
            name='color'
            value='green'
            checked={color === 'green'}
            onChange={handleRadioColorChange}
          />
          Green
        </label>

        <label>
          <input
            type='radio'
            name='color'
            value='purple'
            checked={color === 'purple'}
            onChange={handleRadioColorChange}
          />
          Purple
        </label>
      </fieldset>
      <fieldset>
        <legend>Color of close icon</legend>
        <label>
          <input
            type='radio'
            name='closeIconColor'
            value='black'
            checked={closeIconColor === 'black'}
            onChange={handleRadioCloseIconColorChange}
          />
          Black
        </label>

        <label>
          <input
            type='radio'
            name='closeIconColor'
            value='white'
            checked={closeIconColor === 'white'}
            onChange={handleRadioCloseIconColorChange}
          />
          White
        </label>
      </fieldset>
      <fieldset>
        <legend>Position</legend>
        <label>
          <input
            type='radio'
            name='position'
            value='topLeft'
            checked={position === 'topLeft'}
            onChange={handleRadioPositionChange}
          />
          Top left
        </label>

        <label>
          <input
            type='radio'
            name='position'
            value='topRight'
            checked={position === 'topRight'}
            onChange={handleRadioPositionChange}
          />
          Top right
        </label>

        <label>
          <input
            type='radio'
            name='position'
            value='bottomLeft'
            checked={position === 'bottomLeft'}
            onChange={handleRadioPositionChange}
          />
          Bottom left
        </label>

        <label>
          <input
            type='radio'
            name='position'
            value='bottomRight'
            checked={position === 'bottomRight'}
            onChange={handleRadioPositionChange}
          />
          Bottom right
        </label>
      </fieldset>

      <fieldset>
        <legend>In animation</legend>
        <label>
          <input
            type='radio'
            name='inAnimation'
            value={undefined}
            checked={!inAnimation}
            onChange={handleRadioInAnimationChange}
          />
          None
        </label>
        {Object.keys(inAnimations).map((animationName) => (
          <label key={animationName}>
            <input
              type='radio'
              name='inAnimation'
              value={animationName}
              checked={inAnimation === animationName}
              onChange={handleRadioInAnimationChange}
            />
            {animationName
              .split('-')
              .map((word, idx) =>
                idx === 0
                  ? word[0].toUpperCase() + word.toLowerCase().slice(1)
                  : word.toLowerCase(),
              )
              .join(' ')}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Out animation</legend>
        <label>
          <input
            type='radio'
            name='outAnimation'
            value={undefined}
            checked={!outAnimation}
            onChange={handleRadioOutAnimationChange}
          />
          None
        </label>
        {Object.keys(outAnimations).map((animationName) => (
          <label key={animationName}>
            <input
              type='radio'
              name='outAnimation'
              value={animationName}
              checked={outAnimation === animationName}
              onChange={handleRadioOutAnimationChange}
            />
            {animationName
              .split('-')
              .map((word, idx) =>
                idx === 0
                  ? word[0].toUpperCase() + word.toLowerCase().slice(1)
                  : word.toLowerCase(),
              )
              .join(' ')}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Animation Time</legend>
        <input
          value={animationTime}
          onChange={handleInputChange(setAnimationTime)}
          type='number'
          step={1000}
        />
      </fieldset>

      <button type='submit'>Click me</button>
    </Form>
  );
};
