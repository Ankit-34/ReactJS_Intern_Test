import React,{useState, useEffect} from 'react';
import Card from '../components/Card/Card';
import '../style/homepage.css';

const Homepage = () => {

    const [data, setData] = useState([]);
    var img="";

    const fetchData = () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((response) => response.json())
        .then((d) => {
        setData(d);
        })
    }

    useEffect(() => {
        fetchData();
      }, [])

  return (
    <div className='outer'>
        <div className='cards'>
        {
          data.map((obj) => {
            return <div className='card'>
              <Card movie_data={obj} poster={img}/>
            </div>
          })
        }
        </div>

    </div>
  )
}

export default Homepage;