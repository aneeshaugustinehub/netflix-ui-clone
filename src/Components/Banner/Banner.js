import React, { useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY} from "../../constance/constance";

function Banner() {
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
    })
  }, [])
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum
          aliquam fugit dolore inventore, error quidem soluta vel alias ipsum
          assumenda quasi cum distinctio a tempore placeat, hic consequatur.
          Velit.
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
