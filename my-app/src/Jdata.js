import React from 'react';
import './App.css';
import Data from './data/data.json';

var Jdata=()=>{
	var info = Data.profiles;
	return(
        <section>
        {info.map((i,index)=>(
            <h2>{i.name}</h2>
        	))}
        </section>
		);
}

export default Jdata;