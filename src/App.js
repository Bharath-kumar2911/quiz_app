import React, {useState,useEffect} from "react";
import Axios from "axios";
import './App.css';
import Result from "./result"
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Quiz from "./quiz";
import Home from "./home";
import Regsiter from "./Registration";
import Login from "./Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [questions, setquestions] = useState();
  const [score, setscore] = useState(0);
 
  

  const fetchdetails = (category="") => {
  Axios.get(`http://localhost:5000/${category}`).then(response => {
      console.log("response:",response.data);
      setquestions(response.data);
      
})

  }
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home fetchdetails={fetchdetails}/>}/>
        </Routes>
        <Routes>
      <Route path="/" element={<Regsiter/>}/>
        </Routes>
        <Routes>
      
      <Route path="/quiz" element={<Quiz questions={questions} setquestions={setquestions} 
      score={score} setscore={setscore}/>}/>
        </Routes>
        <Routes>
      <Route path="/result" element={<Result score={score} setscore={setscore}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
