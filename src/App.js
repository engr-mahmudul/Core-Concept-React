import logo from './logo.svg';
import './App.css';


function Cinemas (props){
  return (
    <div className="container">
      <h3>Nayok: {props.nayok}</h3>
      <h3>Nayeka: {props.nayeka}</h3>
    </div>
  );
}
function App() {
  
let pair = [
  {nayok:"Sharuk",nayeka:"kajol"},
  {nayok:"Amir",nayeka:"karisma"},
  {nayok:"Hrittik",nayeka:"rani"},
  {nayok:"Salman",nayeka:"prinka"},
  {nayok:"Ragob",nayeka:"Alia"},
  {nayok:"sagor",nayeka:"priti"},
]
  return (
    <div className="App">
      {
        pair.map(p => <Cinemas nayok = {p.nayok} nayeka = {p.nayeka}></Cinemas>)
      }
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
