import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import { TextField, Button } from '@material-ui/core';
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("quizEmail", JSON.stringify(email));
      localStorage.setItem("quizPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }


  return (
    <>

      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3><i>REGISTRATION</i></h3>

            <div className="form-group">
              <TextField type="text" style={{ margin: '5px 0px' }} onChange={(event) => setName(event.target.value)} label="Enter Name" />
            </div>

            <div className="form-group">
              <TextField type="email" style={{ margin: '5px 0px' }} onChange={(event) => setEmail(event.target.value)} label="Enter emailId" />
            </div>

            <div className="form-group">

              <TextField style={{ margin: '5px 0px' }} type="password" onChange={(event) => setPassword(event.target.value)} label="Enter password" />
            </div>

            <div className="form-group">
              <TextField type="text" style={{ margin: '5px 0px' }} onChange={(event) => setPhone(event.target.value)} label="Enter phone No" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Signup

            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?

            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>

    </>
  );
}

export default Registration;