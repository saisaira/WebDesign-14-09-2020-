import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

ReactDOM.render(<p>Welcome to ReactDOM</p>,document.getElementById('sdc'));

//stateless components
var App=()=> {

  return (
    <div>
      <h1 className="Skill">Welcome to React</h1>
    </div>

  );
}

//state component

class App1 extends React.Component{
  render(){
    return(
      <div >
        <App />
        <Ram />
        <h2 className="Skill">Welcome it is Class component</h2>
        <h2 style={{color:"red",textAlign:"center",textShadow:"5px 5px 5px green"}}> Good morning</h2>
      </div>
      )
  }
}

var Ram=()=>{
  var styless={
    background:"#000",
    color:"#fff",
    textAlign:"center",
    textShadow:"5px 5px 5px green"
  }
  return(
  <div>
  <h3 style={styless}>ram component</h3>
  </div>
  );
}

export default App1;
