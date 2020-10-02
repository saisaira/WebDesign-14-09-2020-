import React,{Component} from 'react';
import './App.css';
import Adata from './Adata';

export default class Profile extends Component{
render(){
	var n=this.props.name;
	return(
		<div>
      <h1>Hello this is Profile class</h1>
		<h1>{n}</h1>
		<Array_data />
        </div>
		);
}
}

function Array_data(){
let array=["Swami","kalyan","Sairam","Sindhu","Navya","Mahalakshmi"];
let array1=["Sindhu","Navya","Mahalakshmi","Swami","kalyan","Sairam"];
return(
<div>
{array.map((i,index)=>(
<Adata name={i} friend={array1[index]}></Adata>
))}
</div>
);
}