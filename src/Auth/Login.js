import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../assets/loginNotes.svg";
import { ToastContainer, toast } from "react-toastify";
import Warn from "../components/Warn/Warn.js";
const Login = () => {
  // port name
  const port = "https://backend-of-notebook.onrender.com";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate(); // initilaize useNaviagte() func
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${port}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      // navigate   by pushing path
      navigate("/addnote");
    } else {
      onSubmit();
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // onSubmit wrong
  const onSubmit = () => {
    toast.error("Login with correct creadentials !");
    toast.POSITION(onSubmit )
  };
  // login Successful 
 
  return (
    <div className="FormContainer">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="form">
        <div className="forms">
          <label htmlFor="email" className="form-label">
            <i className="fa-solid fa-envelope"></i> Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="forms">
          <label htmlFor="password" className="form-label">
            <i className="fa-solid fa-lock"></i> Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="btnCenter">
          <button 
            style={{ border: "0px" }} 
            type="submit"
            className="addBtn"
          >
            Login <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
        <Warn name="If you doesn't have any account " path="/signup" button="Create Account" icon="fa-solid fa-file-invoice"/>
      </form>
      <div className="titlePut">
      
        <h2>Add Your Notes</h2>
        <div className="imageContainer">
          <img src={LoginForm} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
