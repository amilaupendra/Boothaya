import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import './distribution.css'
import Axios from 'axios';
import { useState } from 'react';

export default function Distribution() {
  const [farmerId, setFarmerId] =useState("");
  const [fertilizerId, setFertilizerId] =useState("");
  const [weight, setWeight] =useState("");

  const distribute = ()=>{
    Axios.post("http://localhost:4000/distribute", {
      farmerId : farmerId,
      fertilizerId: fertilizerId,
      weight : weight
    }).then((response)=>{
      console.log("done");
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='distribution-div'>
      <Sidebar />
      <div className="distribution-data">
        <div className="input-data">
          <input type="number" placeholder='farmer id' onChange={(e)=> setFarmerId(e.target.value)}/>
          <input type="number" placeholder='fertilzer id' onChange={(e)=> setFertilizerId(e.target.value)} />
          <input type="number" placeholder='weight' onChange={(e)=> setWeight(e.target.value)} />
          <button onClick={distribute}>Enter</button>
        </div>
      </div>
    </div>
  )
}
