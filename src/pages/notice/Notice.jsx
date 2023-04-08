import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import './notice.css'
import Axios  from 'axios';
import { useState } from 'react';

export default function Notice() {
    const [notice, setNotice] = useState('');
    const textareaNotice = document.getElementById("textareaNotice")

    const addNotice =()=>{
        Axios.post("http://localhost:4000/addnotice",{
            notice_text : notice,
        }).then((response)=>{
            console.log(response);
            textareaNotice.innerHTML='fffff';
        }).catch((err)=>{
            console.log(err)
    });
    };


  return (
    <div className='notice-div'>
        <Sidebar/>
        <div className="noticebody-div">
            <div className="notice-content">
                <textarea placeholder='Enter notice here...' type="text" id='textareaNotice' onChange={(e)=>{
                    setNotice(e.target.value);
                }} />
                <button class="btn btn-outline-success" onClick={addNotice}>Add</button>
            </div>
            
        </div>
    </div>
  )
}
