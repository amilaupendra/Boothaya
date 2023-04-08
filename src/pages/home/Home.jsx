import React from 'react';
import { referencesData } from './referencesData';
import './home.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";



export default function Home() {

  const slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  const slideRight =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div className='home-div'>
      <div className="webreferences-div">
      <FaChevronCircleLeft className='leftslidericon' onClick={slideLeft} />
      <div className="references" id='slider'>
        {referencesData.map((data, i)=>{
          return(
          <a href={data.url}>
          <div className='references-component' key={i} style={{backgroundImage:`url(${data.image})`}}>
            <span>{data.name}</span>
          </div>
          </a>
        )})}
      </div>
    <FaChevronCircleRight className='rightslidericon' onClick={slideRight} />
    </div>
        
    </div>


  )
}
