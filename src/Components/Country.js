import React from 'react';
import "./Country.css"
const Country = (props) => {
    const {name,flag,capital,region,population,area}=props.data
    return (
        <div >
         
            <div className="card">
            <img src={flag} alt="" />
            <h3>Country : {name}</h3>
            <h4>capital : {capital}</h4>
            <h4>region : {region}</h4>
            <h4> population : {population}</h4>
            <h4>area : {area}</h4>
            </div>
 
        </div>
    );
};

export default Country;