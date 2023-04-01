import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./fertilizer.css";

export default function Fertilizer() {
  const [fertilizername, setFertilizername] = useState("");
  const [fertilizerquantity, setFertilizerquantity] = useState("");
  const [fertilizers, setFertilizers] = useState([]);


  const addfertilizer = () => {
    Axios.post("http://localhost:4000/addfertilizer", {
      fertilizername: fertilizername,
      fertilizerquantity: fertilizerquantity,
    }).then((response) => {
      if (response.data.length > 0) {
        // console.log(response.data);
        setFertilizers([...fertilizers, response.data[0]]);
        console.log(response.data)
      } else {
        alert("please check fertilizername and fertilizerquntity");
      }
    });
  };




    useEffect(()=>{
  
      Axios.get('http://localhost:4000/fertilizers')
      .then(res => setFertilizers(res.data))
      .catch(err => console.log(err));
    }, []);


    const deleteFertilizer=(id) =>{
      Axios.delete(`http://localhost:4000/delete/${id}`)
      .then((response) => {
        if (response.data.affectedRows > 0) {
          setFertilizers(fertilizers.filter((fertilizer) => fertilizer.fertilizer_id !== id));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <div className="fertilizer-div">

      <div className="sidebar-div">
        <Sidebar />
      </div>

      <div className="add-fertilizer">
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setFertilizername(e.target.value);
            }}
            required
          />
          <input
            type="number"
            placeholder="Enter quantity"
            onChange={(e) => {
              setFertilizerquantity(e.target.value);
            }}
            required
          />

          <button onClick={addfertilizer} >add</button>
        </form>

      </div>

      <div className="show-fertilizer">
        <table className="table">
          <thead>
            <tr>
              <th>fertilizer_id</th>
              <th>fertilizer_name</th>
              <th>fertilizer quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              fertilizers.map((data,i)=>(
                <tr key= {i}>
                  <td>{data.fertilizer_id}</td>
                  <td>{data.fertilizer_name}</td>
                  <td>{data.fertilizer_quantity}</td>
                  <td> <button onClick={()=>{deleteFertilizer(data.fertilizer_id)}}>Delete</button></td>

                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
          }
        
          
      
