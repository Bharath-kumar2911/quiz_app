import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import "./formInput.css"
import { TextField, Button } from '@material-ui/core';

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("quizPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("quizEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      navigate("/home");

    }
  }

  return (
    <div>

      <form onSubmit={handleLogin}>
        <h3><i>LogIn</i></h3>
        <div className="form-group">


          <TextField type="email" style={{ margin: '5px 0px' }} onChange={(event) => setEmaillog(event.target.value)} label="Enter your emailId" />



        </div>

        <div className="form-group">

          <TextField type="password" style={{ margin: '5px 0px' }} onChange={(event) => setPasswordlog(event.target.value)}
            label="Enter password" />



        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>

    </div>
  );
}

export default Login;