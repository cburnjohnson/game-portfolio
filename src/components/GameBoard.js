import React, { useEffect, useState, useRef } from 'react';
import Chewie from '../images/chewie.png';
import BackgroundImg from '../images/background.png';

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

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    contextRef.current = context;

    const playerSprite = document.createElement('img');
    playerSprite.src = Chewie;
    const background = document.createElement('img');
    background.src = BackgroundImg;

    const intervalId = setInterval(() => {
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
    }, 100);

    return () => clearInterval(intervalId);
  }, [player]);

  const movePlayer = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
        break;
      case 'ArrowLeft':
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
        break;
      case 'ArrowUp':
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
        break;
      case 'ArrowDown':
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
        break;

      default:
        break;
    }
  };

  const stopPlayer = () => {
    console.log('stop');
  };

  return (
    <div id="test">
      <canvas
        id="game-board"
        ref={canvasRef}
        onKeyDown={movePlayer}
        onKeyUp={stopPlayer}
        tabIndex="0"
      ></canvas>
    </div>
  );
};

export default GameBoard;
