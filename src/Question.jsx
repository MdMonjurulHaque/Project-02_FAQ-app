import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const Question = ({ question, ans }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="review-container">
      <div className="review-content">
        <p className="question">{question}</p>
        {toggle && <p>{ans}</p>}
      </div>

      <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
        {toggle ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
    </div>
  );
};

export default Question;
