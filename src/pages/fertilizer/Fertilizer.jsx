import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Fertilizer() {
  const [fertilizername, setFertilizername] = useState("");
  const [fertilizerquantity, setFertilizerquantity] = useState("");

  const navigate = useNavigate();

  const addfertilizer = () => {
    Axios.post("http://localhost:4000/addfertilizer", {
      fertilizername: fertilizername,
      fertilizerquantity: fertilizerquantity,
    }).then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
      } else {
        alert("please check fertilizername and fertilizerquntity");
      }
    });
  };
  return (
    <div>
      <div className="add-fertilizer">
        <form>
          <input type="text" placeholder="Enter Name" 
          onChange={(e) => {
            setFertilizername(e.target.value);
          }}
          required/>
          <input type="number" placeholder="Enter quantity"
          onChange={(e) => {
            setFertilizerquantity(e.target.value);
          }}
          required />

          <button onClick={addfertilizer}>add</button>
        </form>
      </div>
    </div>
  );
}
