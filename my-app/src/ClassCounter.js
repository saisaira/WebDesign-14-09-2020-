import React,{Component} from 'react';
export default class ClassCounter extends Component{
	constructor(){
		super();

		this.state = {
			count:0
		}
	}
 incrementCount=()=>{
 	this.setState({
 		count:this.state.count +1
 	})
 }
 decrementCount=()=>{
 	this.setState({
 		count:this.state.count -1
 	})
 }
 render(){
 	return(
       <div>
       <button onClick={this.incrementCount}>Inc count {this.state.count}</button>
       <button onClick={this.decrementCount}>Dec count </button>
       </div>
 		);
 }

}