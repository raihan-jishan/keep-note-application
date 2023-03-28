import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Warn from "../components/Warn/Warn.js";
import SignUpSVG from "../assets/SignUp.svg";
import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // initailize port
  const port = "https://backend-of-notebook.onrender.com";
  // useNavigate hook react router
  const navigate = useNavigate();

  // onChange funcs and more
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Sign-up successful!");
    const { name, email, password } = credentials;
    const response = await fetch(`${port}/api/auth/createuser`, {
      // des-structurin
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    // Save the auth token and redirect
    localStorage.setItem("token", json.authtoken);
    // navigate   by pushing path
    navigate("/addnote");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="FormContainer">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="form">
        {/* name */}
        <div className="forms">
          <label htmlFor="text" className="form-label">
            <i className="fa-solid fa-signature"></i> Name
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        {/* email  */}
        <div className="forms">
          <label htmlFor="email" className="form-label">
            <i className="fa-solid fa-envelope"></i> Email address
          </label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        {/* password */}
        <div className="forms">
          <label htmlFor="password" className="form-label">
            <i className="fa-solid fa-key"></i> Password
          </label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            name="password"
            id="password"
            required
            minLength={6}
          />
        </div>
        {/* conferm pass */}
        <div className="forms">
          <label htmlFor="cpassword" className="form-label">
            <i className="fa-solid fa-lock"></i> Confirm Password
          </label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            name="cpassword"
            id="cpassword"
            required
            minLength={6}
          />
        </div>
        {/* close there  */}
        <div className="btnCenter">
          <button style={{ border: "0px" }} type="submit" className="addBtn">
            SignUp <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </div>  
        <Warn name="Already have any account ?" path="/login" button="Sign-In" icon="fa-solid fa-user"/>
      </form>
      <div className="titlePut">
        <h2>SignUp</h2>
        <div className="imageContainer">
          <img src={SignUpSVG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
