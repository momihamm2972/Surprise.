/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   gameobjects.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/23 22:25:20 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/27 03:27:36 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export class Paddle {
  constructor(x, y, width, height, speed, bord, score) {
    this.x = x; // Paddle's x position
    this.y = y; // Paddle's y position
    this.width = width; // Paddle's width
    this.height = height; // Paddle's height
    this.speed = speed; // Paddle's movement speed
    this.bord = bord;
    this.score = score;
  }

  // Method to draw the paddle
  show(p5) {
    p5.rect(this.x, this.y, this.width, this.height, this.bord);
  }

  // Method to move the paddle
//   move(direction, p5) {
    // Direction: -1 (up), 1 (down)
    // this.y += direction * this.speed;

    // Ensure the paddle stays within the canvas
    // this.y = p5.constrain(this.y, 0, p5.height - this.height);
//   }
}

export class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x; // Ball's x position
    this.y = y; // Ball's y position
    this.radius = radius; // Ball's radius
    this.speedX = speedX; // Horizontal speed
    this.speedY = speedY; // Vertical speed
  }

  // Method to draw the ball
  show(p5) {
    p5.fill(255);
    p5.ellipse(this.x, this.y, this.radius * 2);
  }
  // show(p5) {
  //   // p5.ellipse(this.x, this.y, this.radius * 2);
  //   p5.fill(255);
  //   p5.square(this.x, this.y, this.radius * 2, this.radius);
  // }

  move(p5, leftPaddle, rightPaddle) {
    this.x += this.speedX;
    this.y += this.speedY;
  
    // Bounce off top and bottom edges
    if (this.y - this.radius <= 0 || this.y + this.radius >= p5.height) {
      this.speedY *= -1;
    }
  
    // Bounce off paddles
    if (
      this.x - this.radius <= leftPaddle.x + leftPaddle.width && // Left paddle
      this.y >= leftPaddle.y &&
      this.y <= leftPaddle.y + leftPaddle.height
    ) {
      this.speedX *= -1;
    } else if (
      this.x + this.radius >= rightPaddle.x && // Right paddle
      this.y >= rightPaddle.y &&
      this.y <= rightPaddle.y + rightPaddle.height
    ) {
      this.speedX *= -1;
    }
  
    // Reset ball if it goes out of bounds
    if (this.x - this.radius <= 0) {
      rightPaddle.score++;// rightScore++; // Right player scores
      this.reset(p5);
    } else if (this.x + this.radius >= p5.width) {
      leftPaddle.score++;// leftScore++; // Left player scores
      this.reset(p5);
    }
  }
  
  reset(p5) {
    this.x = p5.width / 2;
    this.y = p5.height / 2;
    this.speedX *= -1; // Start moving towards the scoring player
  }
  

  
  // Method to update the ball's position
//   update(p5) {
//     this.x += this.speedX;
//     this.y += this.speedY;

    // Check for collisions with the top and bottom borders
    // if (this.y - this.radius < 0 || this.y + this.radius > p5.height) {
    //   this.speedY *= -1; // Reverse vertical direction
    // }
//   }

  // Method to reset the ball's position
//   reset(p5) {
//     this.x = p5.width / 2;
//     this.y = p5.height / 2;
//     this.speedX *= -1; // Reverse horizontal direction
//   }
}