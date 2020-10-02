import React from 'react';
import './App.css';
import Profile from './Profile';

export default class App extends React.Component{
  render(){
   return(
    <div>
     <p className="Skill">Parent </p>
     <ChildComponent name="Child1 of this parent" />
    <Profile name="Profile Page" />
    </div>
   ) 
  }
}

const ChildComponent=(s)=>{
  return(
    <p>{s.name}</p>
    )
}
