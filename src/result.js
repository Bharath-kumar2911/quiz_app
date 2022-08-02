import React from "react";
import "./result.css";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Axios from "axios";

const Result = ({ score, setscore }) => {
  const location = useLocation();
  var name = location.state.name;
  var category = location.state.category;
  const navigate = useNavigate();
  const handlequit = () => {
    Axios.post("http://localhost:5000/result", { name: name, score: score, category: category });
    setscore(0);
    navigate("/home");
  }
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>

      <button
        onClick={handlequit}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20, borderRadius: "20px", padding: "10px" }}

      >
        Go to homepage
      </button>
    </div>
  );
}

export default Result;