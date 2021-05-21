import React, { useEffect, useState, useRef } from 'react';

const GameBoard = () => {
  const [player, setPlayer] = useState({
    x: 200,
    y: 200,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
  });

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // TODO: DRAW IMAGE NOT APPEARING IN CANVAS ?
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);

    const playerSprite = document.createElement('img');
    playerSprite.src = '../images/chewie.png';
    const background = document.createElement('img');
    background.src = '../images/background.png';

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.drawImage(
      playerSprite,
      player.width * player.frameX,
      player.height * player.frameY,
      player.width,
      player.height,
      player.x,
      player.y,
      player.width,
      player.height
    );

    contextRef.current = context;
  }, []);

  const movePlayer = () => {
    console.log('yo');
  };

  const stopPlayer = () => {
    console.log('stop');
  };

  return (
    <canvas
      id="game-board"
      ref={canvasRef}
      onKeyDown={movePlayer}
      onKeyUp={stopPlayer}
      tabIndex="0"
    ></canvas>
  );
};

export default GameBoard;
