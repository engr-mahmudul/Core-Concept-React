import logo from './logo.svg';
import './App.css';

function App() {
  let a = 55;
  let fatherStyle = {
    color: 'green',
    fontSize: '36px'

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h3>This is my first code in React</h3>
          <p style={fatherStyle}>My Father age is {a}</p>
          <p style={{
            color: 'blue',
            fontSize: '36px'

          }}>My mother age is {a - 20}</p>
        </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
