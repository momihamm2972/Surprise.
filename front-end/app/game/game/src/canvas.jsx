/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/22 17:42:58 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/27 02:56:48 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import Sketch from 'react-p5';
import { Paddle, Ball } from './gameobjects';

const Canvas = () => {
  let leftPaddle, rightPaddle, ball, leftScore, rightScore;

  let paddleWidth = 0;//= p5.width * 0.02; // 2% of canvas width
  let paddleHeight = 0;// = p5.height * 0.2; // 20% of canvas height
  let ballRadius = 0;// p5.width * 0.02; // 2% of canvas width
  let actuWindow;




  const setup = (p5, canvasParentRef) => {
    const canvasWidth = p5.windowWidth * 0.6; // 80% of window width
    const canvasHeight = p5.windowHeight * 0.4; // 80% of window height
    const canvas = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    paddleWidth = canvasWidth * 0.01; // 2% of canvas width
    paddleHeight = canvasHeight * 0.2; // 20% of canvas height
    ballRadius = canvasWidth * 0.02; // 2% of canvas width
    actuWindow = p5.windowWidth;
    let ballSpeed = canvasWidth * 0.05;


    
    // Position the canvas
    canvas.style('position', 'absolute'); // Use absolute positioning
    canvas.style('top', '2%');          // Move 20% down
    canvas.style('left', '10%');         // Move 10% to the right
    canvas.style('border-radius', '15px');
    canvas.style('border', '2px dashed white');
    // leftPaddle = new Paddle(p5.width * 0.05 , p5.height * 0.4, paddleWidth, paddleHeight, 10, 10);
    // rightPaddle = new Paddle(p5.width * 0.95 - paddleWidth, p5.height * 0.4, paddleWidth, paddleHeight, 10, 10);
    // ball = new Ball(p5.width * 0.5, p5.height * 0.5, ballRadius, 0, 0);
    leftPaddle = new Paddle(p5.width * 0.01 , p5.height * 0.4, paddleWidth, paddleHeight, 10, 10);
    rightPaddle = new Paddle(p5.width * 0.99 - paddleWidth, p5.height * 0.4, paddleWidth, paddleHeight, 10, 10);
    ball = new Ball(canvasWidth * 0.5, canvasHeight * 0.5, ballRadius, ballSpeed, ballSpeed);
    leftScore = 2;
    rightScore = 8;
    p5.frameRate(60);
  };

  const handlePaddleMovement = (p5) => {
    console.log("whach dkhel be3da");
    // Move left paddle with W (up) and S (down)
    if (p5.keyIsDown(87)) { // 'W' key
      console.log("W");
      leftPaddle.y = Math.max(0, leftPaddle.y - leftPaddle.speed); // Prevent moving out of bounds
    }
    if (p5.keyIsDown(83)) { // 'S' key
      leftPaddle.y = Math.min(p5.height - leftPaddle.height, leftPaddle.y + leftPaddle.speed);
    }
  
    // Move right paddle with UP and DOWN arrow keys
    if (p5.keyIsDown(p5.UP_ARROW)) {
      rightPaddle.y = Math.max(0, rightPaddle.y - rightPaddle.speed); // Prevent moving out of bounds
    }
    if (p5.keyIsDown(p5.DOWN_ARROW)) {
      rightPaddle.y = Math.min(p5.height - rightPaddle.height, rightPaddle.y + rightPaddle.speed);
    }
  };
  

  const draw = (p5) => {
    p5.background('#000000');
    //draw the border 
    // Set border style
    // p5.noFill();
    // p5.stroke(255); // Border color (white in this case)
    // p5.line((p5.width / 2), 0, (p5.width / 2), p5.height); // Vertical line from top to bottom
    // Intermittent line in the middle
    const centerX = p5.width / 2; // Center of the canvas
    p5.stroke(255);               // Set line color to white
    p5.strokeWeight(2);           // Set line thickness
    
    // Loop to draw dashes
    const dashHeight = 2;        // Height of each dash
    const gapHeight = 5;         // Gap between dashes
    for (let y = 0; y < p5.height; y += dashHeight + gapHeight) {
      p5.line(centerX, y, centerX, y + dashHeight); // Draw each dash
    }
    // p5.strokeWeight(5); // Border thickness
    // canvas.style('border', '10px solid red');
    // handlePaddleMovement(p5);
    // Draw the border rectangle
    // p5.rect(0, 0, p5.width, p5.height);

    // Set up text properties
    p5.fill(255); // White color for the text
    p5.noStroke(); // No border around the text
    p5.textSize(p5.width * 0.1); // Text size relative to canvas width
    p5.textAlign(p5.CENTER, p5.CENTER); // Center align text
    // draw the paddles and the ball
    // leftPaddle = new Paddle(p5.width * 0.01 , p5.height * 0.4, paddleWidth, paddleHeight, 1, 10);
    // rightPaddle = new Paddle(p5.width * 0.99 - paddleWidth, p5.height * 0.4, paddleWidth, paddleHeight, 1, 10);
    // ball = new Ball(p5.width * 0.5, p5.height * 0.5, ballRadius, 0, 0);

    // Draw the scores
    p5.text(leftScore, p5.width * 0.25, p5.height * 0.2); // Left score at 25% width
    p5.text(rightScore, p5.width * 0.75, p5.height * 0.2); // Right score at 75% width
    // paddleWidth = p5.width * 0.01;

    handlePaddleMovement(p5);
    // paddleWidth = p5.width * 0.01;
    leftPaddle.show(p5);
    rightPaddle.show(p5);
    ball.show(p5);
  };

  const keyPressed = (p5) => {
    // handlePaddleMovement(p5);
    // Handle player movement with arrow keys
    // if (p5.keyIsDown(p5.LEFT_ARROW)) playerX -= playerSpeed;
    // if (p5.keyIsDown(p5.RIGHT_ARROW)) playerX += playerSpeed;
    // if (p5.keyIsDown(p5.UP_ARROW)) playerY -= playerSpeed;
    // if (p5.keyIsDown(p5.DOWN_ARROW)) playerY += playerSpeed;
  };

  const windowResized = (p5) => {
    // Adjust the canvas size dynamically on window resize
    let modulo = 0.4;
    const canvasWidth = p5.windowWidth * 0.6; // 80% of window width
    // const radiusBall = canvasWidth * 0.02;
    // const speedBall = canvasWidth * 0.05;
    // if (actuWindow > p5.windowWidth)
    // {
    //   console.log ("weyawrahi m9ewda");
    //   if (modulo < 0.6)
    //     modulo += 0.1;
    // }
    // else
    // {
    //   if (modulo > 0.4)
    //     modulo -= 0.1;
    // }
    const canvasHeight = p5.windowHeight * modulo; // 60% of window height
    leftPaddle.x = canvasWidth * 0.01;
    // leftPaddle.x = p5.width * 0.05;
    // leftPaddle.y = p5.height * 0.4 - (canvasHeight * 0.2 / 2);
    // leftPaddle.y = 
    paddleWidth = canvasWidth * 0.01;
    rightPaddle.x = canvasWidth * 0.99 - paddleWidth;
    // rightPaddle.y = canvasWidth * 0.4 - (canvasHeight * 0.2 / 2);
    leftPaddle.width = canvasWidth * 0.01;
    rightPaddle.width = canvasWidth * 0.01;
    ball.radius = canvasWidth * 0.02;;
    ball.x = canvasWidth * 0.5;
    ball.y = canvasHeight * 0.5;
    
    p5.resizeCanvas(canvasWidth, canvasHeight);
  };

  return <Sketch setup={setup}  windowResized={windowResized} draw={draw} keyPressed={keyPressed} />;
};

export default Canvas;
