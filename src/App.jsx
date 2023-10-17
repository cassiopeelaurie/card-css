import React from "react";
import ReactStarRating from "react-star-ratings";
import "react-star-ratings/star-ratings.css";
import "./App.scss";
import "./App.css";

function App() {
  const [rating, setRating] = React.useState(0);
  return (
    <div className="entireCard">
      <div className="card">
        <img
          className="image"
          src="https://static.skyrock.fm/static/bLBz9No4UQWzI9J4ulrasw.wH3HWeztPLO4-JiL7KSxGw.adc620.jpg"
          alt="Stoney"
        ></img>
        <div className="textContainer">
          <h1 className="song"> White Iverson </h1>
          <p className="album"> Stoney </p>
          <p className="date">(2016)</p>
        </div>
      </div>
      <div className="rateContainer">
        <p className="rateSentence"> Rate this album </p>
        <ReactStarRating
          className="rating-stars"
          rating={rating}
          starRatedColor="lightred"
          changeRating={(newRating) => setRating(newRating)}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </div>
  );
}

export default App;
