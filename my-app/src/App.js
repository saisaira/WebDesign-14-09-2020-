import React from 'react';
import './App.css';
import Jdata from './Jdata';
import Profile from './Profile';
import Data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';

export default class App extends React.Component{
  render(){
   return(
     <BrowserRouter>
     <Route exact path="/" component={Home} />
     <Route exact path="/profile" component={Profile} /> 
   </BrowserRouter>  
   ) 
  }
}

let Home=()=>{
  var info = Data.profiles;
  return(
  <section className="parent">
        {info.map((i,index)=>(
            <article className="child">
            <h2>{i.name}</h2>
            <p>{i.role}</p>
            <a style={{color:"red"}} href={"mailto:"+i.email}>{i.email}</a><br />
            <a href={"tel:"+i.mobile}>{i.mobile}</a><br />
            <Link to={{pathname:"/profile",data:{id:index}}}>View Details</Link>
            </article>
          ))}

        <ClassCounter />
        <HookCounter />
        </section>
)}

        
