import React from 'react';
import '../style/booknow.css'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import * as DOMPurify from 'dompurify';

function Booknow() {
    const navigate = useNavigate();

    const locate = useLocation();
    const data=locate.state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.place.value == '')
            document.getElementById('msg').innerHTML = "*place required";
        else if(e.target.date.value == '')
            document.getElementById('msg').innerHTML = "*date required";
        else if(e.target.time.value == '')
            document.getElementById('msg').innerHTML = "*time required";
        else
            {
                const userData = {
                    name : e.target.name.value,
                    place : e.target.place.value,
                    date : e.target.date.value,
                    time : e.target.time.value,
                    count : e.target.count.value,
                };

                localStorage.setItem("userData", JSON.stringify(userData));
                e.target.reset();
                document.getElementById('msg').innerHTML = "";
                navigate('/');
            }
    }

  return (
    <div className='main'>

    <div className='summary'>
        <label> Sumamry : </label>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.summary) }} />
    </div>

    <form onSubmit={handleSubmit}>
        <div className='form_viewer'>
            <div className='show_name'>
                <label>Name : </label>
                <input name="name" type="text" className='name' value={data.name} readOnly/>
            </div>
            <div className='show_place'>
                <label>Place : </label>
                <input name="place" type="text" className='place'/>
            </div>
            <div className='show_date'>
                <label>Date : </label>
                <input name="date" type="date" className='date'/>
            </div>
            <div className='show_time'>
                <label>Time : </label>
                <input name="time" type="time" className='time'/>
            </div>  
            <div className='tickets_count'>
                <label>No. of Tickets : </label>
                <input name="count" type="number" className='count' defaultValue={1}/>
            </div>
            <p id='msg'></p>
            <input type="submit" value="Book My Show" className='btn'/>
            
        </div>
    </form>
    </div>
  )
}

export default Booknow;