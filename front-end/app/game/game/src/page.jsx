/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/19 12:41:28 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/21 19:29:25 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useEffect, useRef } from 'react';
import './index.css'; // Import the CSS file

const Canvas = (props) => {
  const canvasRef = useRef(null);

  // Dynamically resize the canvas to match its container size
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      // Set canvas width and height to match the container size
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    // Call the resize function on mount and when the window resizes
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

function Back() {
  return <div className="background"></div>;
}

function App() {
  return (
    <div className="relative">
      <Back />
      {/* Canvas with responsive width and height */}
      <Canvas className="canvas" />
    </div>
  );
}

export default App;
