import React from 'react';
import Actor from './Actor';
import useKeyPress from '../hooks/useKeyPress';
import useWalk from '../hooks/useWalk';
const Player = ({ skin }) => {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    walk(e.key.replace('Arrow', '').toLowerCase());
    e.preventDefault();
  });

  return (
    <Actor
      sprite={`/images/sprites/skins/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
};

export default Player;
