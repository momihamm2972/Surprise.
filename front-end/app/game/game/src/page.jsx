/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/19 12:41:28 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/23 23:14:30 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import './index.css'; // Import the CSS file
import Canvas from './canvas';

function Back() {
  return <div className="background"></div>;
}

function App() {
  return (
    <div className="relative">
      <Back />
      {/* <h1 style={{ textAlign: 'center', color: '#fff', margin: '20px 0' }}>My Game</h1> */}
      <Canvas />
    </div>
  );
}

export default App;
