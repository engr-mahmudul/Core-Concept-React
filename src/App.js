import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Cinemas (props){
  return (
    <div className="container">
      <h3>Nayok: {props.nayok}</h3>
      <h3>Nayeka: {props.nayeka}</h3>
    </div>
  );
}
function App() {
  

  return (
    <div className="App">
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0)
  const increaseFunc = () => setCount(count+1);
  const decreaseFunc = () => setCount(count-1);
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick = {increaseFunc}>Increase</button>
      <button onClick = {decreaseFunc}>Decrease</button>
    </div>
  )
}

function Person(){
  const design = {
    backgroundColor : 'cyan',
    color : "black",
    border : "3px solid red",
    margin: "10px",
    borderRadius: "10px"
  }
  return (
    <div style={design}>
      <h1>Name: Shakib Al Hasan</h1>
      <h4>Profession: Crickter</h4>
    </div>
  );
}
function Friend(props){
  console.log(props);
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <h4>ID: {props.id}</h4>
    </div>
  );
}
export default App;
