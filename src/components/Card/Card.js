import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/card.css'

const Card = (props) => {
  const data = props.movie_data.show;
  
  var name = data.name;
  var rating = data.rating.average;
  var poster="https://via.placeholder.com/210x295?text=No+Image";
  // No Image by default



  // if(data.hasOwnProperty("image"))
  // {
  //   try{
  //       poster = data.image.original;
  //   }
  //   catch(e){
  //     try{
  //       poster = data.image.medium;
  //     }
  //     catch(e1){
  //       console.log(e1);
  //     }
  //   }
  // }
  
  const premiered = data.premiered;
  const timeForShow = data.schedule.time;
  const runtime = data.runtime;
  return (
        <div className='container'>

          <div className='image'>
            <img src={data?.image?.original ?? poster} alt='poster'></img>
          </div>

          <div className='text'>
            <p className='name'> <b>Name :</b> {name} </p>
            <p className='name'> <b>Rating :</b> {rating || "Not Rated"} </p>
            <p className='name'><b>Premiered :</b>  {premiered || "yyyy-mm-dd"} </p>
            <p className='name'> <b>Show-Time :</b> {timeForShow || "Not Declared"} </p>
            <p className='name'><b>Run-Time :</b>  {runtime || "Not Disclosed"} </p>
          </div>

          <button type='button' className='button'>
            <Link to="/booknow" state={data}>
              Book Now
            </Link>
          </button>

        </div>
  )
}

export default Card;