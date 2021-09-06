import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(req=>req.json())
    .then(data=>{
      setData(data.slice(0,240))
    })
  },[])

  return (
    <div>
       <p>Country loaded : {data.length}</p>
       <div className="cards">
       {
         data.map(x=><Country data={x}/>)
       }
       </div>
    </div>
  );
}

export default App;
