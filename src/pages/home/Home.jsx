import React from 'react';
import { referencesData } from './referencesData';
import './home.css'

export default function Home() {
  return (
    <div className='home-div'>
      <div className="references">
        {referencesData.map((data, i)=>{
          return(
          <div className='references-component' key={i}>
            <span>{data.name}</span>
          </div>
        )})}
      </div>
        
    </div>
  )
}
