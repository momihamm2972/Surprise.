/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   gameobjects.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/23 22:25:20 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/24 17:43:07 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export class Paddle {
  constructor(x, y, width, height, speed) {
    this.x = x; // Paddle's x position
    this.y = y; // Paddle's y position
    this.width = width; // Paddle's width
    this.height = height; // Paddle's height
    this.speed = speed; // Paddle's movement speed
  }

  // Method to draw the paddle
  show(p5) {
    p5.rect(this.x, this.y, this.width, this.height);
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