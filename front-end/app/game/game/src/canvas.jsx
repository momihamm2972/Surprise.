/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/22 17:42:58 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/22 22:24:30 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import Sketch from 'react-p5';

const Canvas = () => {
  let x = 0; // Example variable for drawing
  let y = 0;

  // Setup function for p5.js
  const setup = (p5, canvasParentRef) => {
    // Create canvas inside the parent
    const canvasWidth = p5.windowWidth * 0.7; // 50% of window width
    const canvasHeight = p5.windowHeight * 0.3; // 50% of window height
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  // Draw function for p5.js
  const draw = (p5) => {
    p5.background(200); // Set background color
    p5.fill(100, 100, 250); // Set fill color
    p5.ellipse(x, y, 50, 50); // Draw an ellipse
    x += 1; // Update position
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
