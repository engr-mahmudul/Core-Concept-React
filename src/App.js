import logo from './logo.svg';
import './App.css';


function App() {
  

  return (
    <div className="App">
      <Friend name="Khosru" id="120"></Friend>
      <Friend name="Urmi" id="124"></Friend>
      <Person name="Fahim" id="126"></Person>
      
    </div>
  );
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
