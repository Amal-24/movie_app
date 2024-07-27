import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axiosConfig";
import { baseUrl, imageUrl} from "../../constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + props.url)
      .then((response) => {
        console.log("rowpost", response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          return (<div>
             <img className={props.isSmall?"small_poster":"poster"} alt="poster" src={imageUrl+movie.backdrop_path} />
             <p className="row_post_title">{movie.title}</p>
          </div>
         
          )
        })}
      </div>
    </div>
  );
}

export default RowPost;
