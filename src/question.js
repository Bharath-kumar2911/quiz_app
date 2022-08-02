import React, { useState } from "react";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import "./question.css";

const Question = ({ currques, setcurrques, questions, setquestions, score, setscore, option, correct, name, category }) => {
  const [selected, setselected] = useState();
  const [isDisabled, setDisabled] = useState(false);
  const [interval, setinterval] = useState();
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  console.log("ques ques:", currques, questions);
  console.log("main options:", option);
  console.log("ques name:", name);
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };
  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) setscore(score + 1);

  };
  const navigate = useNavigate();
  const handleNext = () => {
    console.log("qqqqqqqqqq:", currques);
    if (currques >= 4) {
      navigate("/result", { state: { name: name, category: category } });
    }
    else if (selected) {
      setcurrques(currques + 1);
      setselected();
    }
  }
  const handlePrev = () => {
    if (currques === 0) {
      setDisabled(true);
    }
    else {
      setcurrques(currques - 1);

      setDisabled(false);
    }
  }
  const handleQuit = () => {
    setcurrques(0);
    setquestions();
    navigate("/home");
  };

  return (
    <div className="question">
      <h3>Question : {currques + 1}</h3>
      <div className="singleQuestion">
        <h2>{questions[currques].question}</h2>
        <div className="options">
          {option && option.map(i => (
            <button
              className={`singleOption ${selected && handleSelect(i)}`}
              key={i}
              onClick={() => { handleCheck(i) }}
              disabled={selected}
            >{i}</button>
          ))}
        </div>
      </div>
      <div className="controls">
        <button
          variant="outlined"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={handlePrev}
          disabled={isDisabled}
        >
          Prev Question
        </button>
        <button
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: 185 }}

          onClick={() => handleQuit()}
        >
          Quit
        </button>
        <button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={handleNext}
        >
          {currques === 4 ? "Submit" : "Next Question"}
        </button>
      </div>


    </div>
  )
}

export default Question;