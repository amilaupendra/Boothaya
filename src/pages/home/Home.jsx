import React, { useEffect, useState } from 'react';
import { referencesData } from './referencesData';
import './home.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Axios from 'axios';




export default function Home() {

  const [notices, setNotices] = useState([]);

  const slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  const slideRight =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 600;
  };


  useEffect(()=>{
    Axios.get("http://localhost:4000/shownotices")
    .then((response)=>{
      setNotices(response.data);
    }).catch((err)=>{
      console.log(err)
    },[]);
  });

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

    <div className="noticeboard">
      <ul>
      {notices.map((notice, i) =>{
        return(
        <li key={i}>{notice.notice_text}</li>
      );
    })}
    </ul>

    </div>
        
    </div>


  );
}
