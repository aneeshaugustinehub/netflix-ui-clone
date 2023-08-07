import React, { useEffect, useState } from "react";
import "./RowPost.css";
import {imageUrl } from "../../constance/constance";
import axios from "../../constance/axios";

function RowPost(props) {
  const [movie, setMovies] = useState([]);
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
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) =>
          <img className={props.isSmall ? "smallPosters":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
    </div>
  )
}

export default RowPost;
