import { useState } from 'react';

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize = 16;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  const walk = (dir) => {
    setDir((prevState) => {
      if (directions[dir] === prevState) move(dir);
      return directions[dir];
    });
    setStep((prevState) => (prevState < maxSteps - 1 ? prevState + 1 : 0));
  };

  const move = (dir) => {
    setPosition((prevState) => ({
      x: prevState.x + modifier[dir].x,
      y: prevState.y + modifier[dir].y,
    }));
  };
  console.log(position);

  return {
    walk,
    dir,
    step,
    position,
  };
}
