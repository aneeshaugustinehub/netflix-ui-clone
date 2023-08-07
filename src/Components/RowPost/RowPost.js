import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl,API_KEY } from "../../constance/constance";
import axios from "../../constance/axios";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movie, setMovies] = useState([]);
const [TrailerId, setTrailerId] = useState("")
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        //alert('network error')
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onclickYoutube =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(responce=>{
      console.log(responce.data);
      if (responce.data.results.length!==0){
        setTrailerId(responce.data.results[0])
      }else{
        console.log("video not avlible");
        
      }
      
    })
    
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img onClick ={()=>onclickYoutube(obj.id)}
            className={props.isSmall ? "smallPosters" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {TrailerId &&  <YouTube videoId={TrailerId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
