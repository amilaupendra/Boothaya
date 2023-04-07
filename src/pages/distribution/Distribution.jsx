import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import './distribution.css'
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function Distribution() {
  const [farmerId, setFarmerId] =useState("");
  const [fertilizerId, setFertilizerId] =useState("");
  const [weight, setWeight] =useState("");
  const[distributions, setDistributions] = useState([]);

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


  useEffect(() => {
    Axios.get("http://localhost:4000/showdistributions")
      .then((res) => setDistributions(res.data))
      .catch((err) => console.log(err));
  }, [distributions]);

  return (
    <div className='distribution-div'>
      <Sidebar />
      <div className="distribution-data">
        <div className="input-data">
          <input type="number"  placeholder='farmer id' onChange={(e)=> setFarmerId(e.target.value)}/>
          <input type="number" placeholder='fertilzer id' onChange={(e)=> setFertilizerId(e.target.value)} />
          <input type="number" placeholder='weight' onChange={(e)=> setWeight(e.target.value)} />
          <button class="btn btn-outline-success" onClick={distribute}>Enter</button>
        </div>

        <div className="distribution-table">
          <table className="table table-hover">
            <thead>
            <tr>
              <th>Distribution id</th>
              <th>Farmer Id</th>
              <th>Fertilizer Id</th>
              <th>Weight</th>
            </tr>
            </thead>

            <tbody>
              {distributions.map((distribution, i)=>(
                <tr key={i}>
                  <td>{distribution.distribution_id}</td>
                  <td>{distribution.farmer_id}</td>
                  <td>{distribution.fertilizer_id}</td>
                  <td>{distribution.weight}</td>
                </tr>
              ))}
              <tr></tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
