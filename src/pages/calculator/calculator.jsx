import React, { useState } from 'react'
import './calculator.css'
import Sidebar from '../../Components/sidebar/Sidebar';

export default function Calculator() {

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const HandleFirstNumberChange =(e) =>{
    setFirstNumber(Number(e.target.value));
  };

  const HandleSecondNumberChange =(e) =>{
    setSecondNumber(Number(e.target.value));
  }

  const HandleAddition=()=>{
    const addition = (firstNumber + secondNumber).toFixed(3)
    setResult( addition);
  };

  const HandleSubstraction=()=>{
    const substraction = (firstNumber - secondNumber).toFixed(3)
    setResult( substraction);
  };

  const HandleMultiplication=()=>{
    const multiplied = (firstNumber * secondNumber).toFixed(3)
    setResult( multiplied);
  };

  const HandleDivision=()=>{
    const divident=(firstNumber / secondNumber).toFixed(3);
    setResult( divident);
  };


    
  return (
    
    <div className='calculator-div'>
      <Sidebar/>
      <div className='calculator-content-div'>
      <label htmlFor="first-number">Enter First Number</label>
      <input type="number" value={firstNumber} onChange={HandleFirstNumberChange} />

      <label htmlFor="Second-number">Enter Second Number</label>
      <input type="number" value={secondNumber} onChange={HandleSecondNumberChange} />


      <div className="operators-div">
      <button class="btn btn-outline-success" type='submit' onClick={HandleAddition} >+</button>
      <button class="btn btn-outline-success" type='submit' onClick={HandleSubstraction} >-</button>
      <button class="btn btn-outline-success" type='submit' onClick={HandleMultiplication} >*</button>
      <button class="btn btn-outline-success" type='submit' onClick={HandleDivision} >/</button>

      </div>



      <span className='result-span'> {result}</span>


      </div>
      </div>




  )
}
