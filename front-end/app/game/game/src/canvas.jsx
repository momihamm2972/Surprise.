/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/22 17:42:58 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/24 18:07:15 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import Sketch from 'react-p5';
import { Paddle, Ball } from './gameobjects';

const Canvas = () => {
  let leftPaddle, rightPaddle, ball, leftScore, rightScore;


  const setup = (p5, canvasParentRef) => {
    const canvasWidth = p5.windowWidth * 0.4; // 80% of window width
    const canvasHeight = p5.windowHeight * 0.3; // 80% of window height
    const canvas = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    
    // Position the canvas
    canvas.style('position', 'absolute'); // Use absolute positioning
    canvas.style('top', '2%');          // Move 20% down
    canvas.style('left', '20%');         // Move 10% to the right
    canvas.style('border-radius', '15px');
    leftPaddle = new Paddle(5 , ((p5.windowHeight * 0.3) / 2) - 50, 20, 100, 10);
    rightPaddle = new Paddle((p5.windowWidth * 0.4) - 25, ((p5.windowHeight * 0.3) / 2) - 50, 20, 100, 10);
    ball = new Ball(canvasWidth / 2, canvasHeight / 2, 15, 0, 0);
    leftScore = 0;
    rightScore = 0;
    p5.frameRate(60);
  };

  const draw = (p5) => {
    p5.background('#000000');

    // Set up text properties
    p5.fill(255); // White color for the text
    p5.noStroke(); // No border around the text
    p5.textSize(p5.width * 0.1); // Text size relative to canvas width
    p5.textAlign(p5.CENTER, p5.CENTER); // Center align text

    // Draw the scores
    p5.text(leftScore, p5.width * 0.25, p5.height * 0.1); // Left score at 25% width
    p5.text(rightScore, p5.width * 0.75, p5.height * 0.1); // Right score at 75% width


    leftPaddle.show(p5);
    rightPaddle.show(p5);
    ball.show(p5);
  };

  const keyPressed = (p5) => {
    // Handle player movement with arrow keys
    // if (p5.keyIsDown(p5.LEFT_ARROW)) playerX -= playerSpeed;
    // if (p5.keyIsDown(p5.RIGHT_ARROW)) playerX += playerSpeed;
    // if (p5.keyIsDown(p5.UP_ARROW)) playerY -= playerSpeed;
    // if (p5.keyIsDown(p5.DOWN_ARROW)) playerY += playerSpeed;
  };

  const windowResized = (p5) => {
    // Adjust the canvas size dynamically on window resize
    const canvasWidth = p5.windowWidth * 0.4; // 80% of window width
    const canvasHeight = p5.windowHeight * 0.3; // 60% of window height
    p5.resizeCanvas(canvasWidth, canvasHeight);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} keyPressed={keyPressed} />;
};

export default Canvas;
