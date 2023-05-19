import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import {API_KEY, imageUrl} from '../../Constants/Constants';
import axios from '../../axios';
import './Rowpost.css';

export default function Rowpost(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.genre).then(response=>{
      //console.log(response);
      setMovies(response.data.results);
    })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data);
        //setUrlId(response.data)
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }
        else{
          console.log("Empty");
        }
      }).catch( (error) => {
        console.log(error.toJSON());
      });
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj) => 
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}           
            
        </div>

       { urlId && <YouTube videoId={urlId.key} opts={opts} /> }

    </div>
  )
}
