import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./starRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="red" onSetRating={setMovieRating} />
      <p>This movie is rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      messages={["a", "b", "c", "d", "e"]}
      className="Test"
      defaultRating={3}
    />
    <StarRating />
    <Test />
  </React.StrictMode>
);
