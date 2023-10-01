import React, { useState } from "react";
import data from "./data";
import "./app.css";
import Question from "./Question";

const App = () => {
 
  return (
    <div>
      <div className="container">
        <div className="left-part">
          <h3>Question And Answers About Child Care</h3>
        </div>
        <div className="right-part">
          {data.map((review) => 
            <Question key={review.id} {...review} />)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
