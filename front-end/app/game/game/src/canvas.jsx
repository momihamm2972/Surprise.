/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/22 17:42:58 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/24 00:24:34 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import Sketch from 'react-p5';

const Canvas = () => {
  // let playerX = 100; // Player's X position
  // let playerY = 100; // Player's Y position
  // let playerSpeed = 5; // Speed of player movement

  const setup = (p5, canvasParentRef) => {
    const canvasWidth = p5.windowWidth * 0.4; // 80% of window width
    const canvasHeight = p5.windowHeight * 0.3; // 80% of window height
    const canvas = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    
    // Position the canvas
    canvas.style('position', 'absolute'); // Use absolute positioning
    canvas.style('top', '2%');          // Move 20% down
    canvas.style('left', '20%');         // Move 10% to the right
    canvas.style('border-radius', '15px');
    // Add blur effect
    // canvas.style('filter', 'blur(100px)'); // Adjust blur intensity as needed
    // canvas.elt.style.filter = 'blur(5px)';
    // fill(255);

    // // Optional: Set a smoother frame rate
    // p5.frameRate(60);
  };

  const draw = (p5) => {
    p5.background('#ffffff');
    // p5.background(30); // Dark background color
    // p5.fill(200, 0, 0); // Player color
    // p5.rect(playerX, playerY, 50, 50); // Draw player rectangle

    // // Example: Simple boundaries
    // if (playerX < 0) playerX = 0;
    // if (playerX + 50 > p5.width) playerX = p5.width - 50;
    // if (playerY < 0) playerY = 0;
    // if (playerY + 50 > p5.height) playerY = p5.height - 50;
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
