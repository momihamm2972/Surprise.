/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/19 12:41:28 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/19 20:55:31 by momihamm         ###   ########.fr       */
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
        <div style={{ 
            background: `radial-gradient(circle at bottom, #020207 5%, transparent 80%), linear-gradient(to left, #020207, #1c3986, #020207)`,
            height: '100vh' 
        }}>
            </div>
    );
}

// function Back() {
//     return (
//         <div style={{
//             background: `
//                 radial-gradient(circle at top, black 50%, transparent 80%),
//                 linear-gradient(to Left, black 30%, transparent 31%, transparent 80%, black 81%)`,
//             height: '100vh'
//         }}>
//             {/* Your content goes here */}
//         </div>
//     );
// }




// function Back() {
//     return (
//         <div style={{ 
//             background: 'conic-gradient(black 0deg 90deg, white 90deg 270deg, black 270deg 360deg)',
//             height: '100vh',
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             {/* Your content goes here */}
//         </div>
//     );
// }

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



// }
