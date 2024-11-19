import logo from './logo.svg';
import './App.css';

function MyButton()
{
  return(
    <button>
      lkmaya
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to kmi.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
      </header>
    </div>
  );
}

export default App;
