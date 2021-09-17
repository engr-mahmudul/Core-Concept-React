import logo from './logo.svg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person(){
  const design = {
    backgroundColor : 'cyan',
    color : "black",
    boder : "2px solid black",
    margin: "10px"
  }
  return (
    <div style={design}>
      <h1>Name: Shakib Al Hasan</h1>
      <h4>Profession: Crickter</h4>
    </div>
  );
}

export default App;
