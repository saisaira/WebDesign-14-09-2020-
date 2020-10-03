import React,{Component} from 'react';
import './App.css';
import Data from './data/data.json';
import image from './image/apssdc.png';

export default class Profile extends Component{
	render(){
		var indexValue=this.props.location.data.id;
		var eachdetails=Data.profiles[indexValue];
		return(
           <section>
             <h1 className="Skill">{eachdetails.name}</h1>
             <h1 className="Skill">{eachdetails.email}</h1>
             <h1 className="Skill">{eachdetails.role}</h1>
             <h1 className="Skill">{eachdetails.mobile}</h1>
             <h1 className="Skill">{eachdetails.nature}</h1>
             <img src={image} alt="image" />
           </section>

			);
	}
}