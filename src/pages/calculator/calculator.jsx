import React, { useState } from 'react'
import './calculator.css'
import Sidebar from '../../Components/sidebar/Sidebar';

export default function Calculator() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const HandleFirstNumberChange =(e) =>{
    setFirstNumber(Number(e.target.value));
  };

  const HandleSecondNumberChange =(e) =>{
    setSecondNumber(Number(e.target.value));
  }

  const HandleAddition=()=>{
    setResult( firstNumber+secondNumber);
    alert(result);
  };
  const HandleSubstraction=()=>{
    setResult( firstNumber - secondNumber);
    alert(result);
  };
  const HandleMultiplication=()=>{
    setResult( firstNumber * secondNumber);
    alert(result);
  };
  const HandleDivision=()=>{
    setResult( firstNumber / secondNumber);
    alert(result);
  };

    
  return (
    
    <div className='calculator-div'>
      <Sidebar/>
      <div>
      <label htmlFor="first-number">Enter First Number</label>
      <input type="number" value={firstNumber} onChange={HandleFirstNumberChange} />

      <label htmlFor="Second-number">Enter First Number</label>
      <input type="number" value={secondNumber} onChange={HandleSecondNumberChange} />

      <button className='btn btn-primary' type='submit' onClick={HandleAddition} >Ok</button>
      <button className='btn btn-primary' type='submit' onClick={HandleSubstraction} >Ok</button>
      <button className='btn btn-primary' type='submit' onClick={HandleMultiplication} >Ok</button>
      <button className='btn btn-primary' type='submit' onClick={HandleDivision} >Ok</button>

      <span > {result}</span>

      hello
          dgdg
          dgdg
          dg
          dgd
          gd Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat ea itaque nisi sunt illo aspernatur, unde nostrum eveniet. Laudantium suscipit ea aliquam beatae et alias, illum excepturi optio facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos numquam distinctio quas eius minus tempore expedita vitae omnis est sint, consequuntur ea aliquam! Atque eveniet accusamus reprehenderit tenetur iste?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus dolor temporibus maxime reprehenderit, a aliquam inventore, optio, consectetur magnam voluptas odit quos in! Corporis laboriosam sequi magni facilis dolorum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet, neque odit quam magni minus laborum aliquam laboriosam beatae a officia ad eum mollitia eius dignissimos vero veniam, possimus cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere laborum commodi, dignissimos velit quod nesciunt reprehenderit magni iure quos neque, debitis dolorum officiis rerum natus consequatur! Laudantium, enim excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non explicabo consectetur doloribus quasi aperiam rerum doloremque deleniti commodi sed sapiente ad odit, exercitationem totam perspiciatis reprehenderit vel eligendi inventore!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti itaque est repellendus totam, sunt minus voluptatem delectus deleniti voluptatibus consectetur. Nostrum, dolorem. Nihil blanditiis iusto culpa iste delectus ad.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, dolor neque voluptate vel ad qui ab reiciendis recusandae. Ad laborum repellat deserunt perspiciatis tenetur debitis sit atque nisi, modi sequi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, earum magni esse et optio consequuntur enim id fugiat culpa officia illo nostrum beatae, necessitatibus ea tempora non voluptatibus sequi!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur, voluptatem deleniti molestias voluptas nesciunt recusandae, distinctio, corporis iusto similique molestiae ipsa velit in expedita quas optio. Aliquam, cupiditate earum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias voluptate consequatur, sunt inventore delectus nostrum id assumenda blanditiis, quam odit atque dignissimos. Deserunt blanditiis nam, pariatur non exercitationem quam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus maiores reiciendis praesentium laudantium quisquam molestias ex voluptatem molestiae eligendi debitis, beatae dolorem iure incidunt ea quod delectus a nemo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam optio est perferendis molestiae vel accusantium necessitatibus, error voluptates quibusdam esse aliquam, voluptatum in porro saepe odit alias? Odio, perspiciatis quod.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eveniet ipsum necessitatibus inventore, atque minus iure quod officia, unde doloribus illum reprehenderit maiores, neque odio aperiam amet perspiciatis expedita exercitationem?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, magni. Unde quisquam nam totam illum minima vel saepe eveniet, laboriosam numquam in expedita quos, mollitia delectus aliquam cupiditate labore temporibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.


      </div>



    </div>



  )
}
