/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/19 12:41:28 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/19 20:23:54 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

function MyButton()
{
  return(
    <button>
      lkmaya
    </button>
  );
}

// function back()
// {
//     return (
//         <div style={{ backgroundColor: 'black', height : '100vh'}}>
//             {/*  */}
//         </div>
//     );
// }

function Back() {
    return (
        // <div style={{ backgroundColor: '#020207', height: '100vh' }}>
        <div style={{ background: 'linear-gradient(to Left, #020207, #1c3986, #020207)', height: '100vh' }}>
            {/* Your content goes here */}
        </div>
    );
}


function App()
{
    // <MyButton />
    return (
        <div>
            {/* LKMAYA */}
            <Back />
            {/* <MyButton /> */}
        </div>
    );
}

export default App;