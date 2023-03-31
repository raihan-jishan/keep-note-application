import React, { useContext, useEffect, useState } from "react";
import AccountImage from "../assets/account.svg";
import "../styles/addNote.css";
import "../styles/account.css";
import { useNavigate } from "react-router-dom";
import LogOut from "../Auth/LogOut";
import noteContext from "../context/notes/noteContext.js";
const Account = () => {
  // initialze context
  const context = useContext(noteContext);
  const { user, getUserdetails } = context;
  const navigate = useNavigate();

  // handleLogout func
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  // useEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserdetails();
    } else {
      navigate("/login");
    }
  });
  //  useState
  const [users, setUsers] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="FormContainer">
        <div className="form">
          <form className="form">
            <div className="forms">
              <label htmlFor="title" className="infos">
                <i className="fa-solid fa-comment"></i> {user.name}
              </label>
            </div>
            <div className="forms">
              <label htmlFor="description" className="infos">
                <i className="fa-solid fa-pen"></i> {user.email}
              </label>
            </div>
            <div className="forms">
              <label htmlFor="tag" className="infos">
                <i className="fa-solid fa-tag"></i> {user.date}
              <br />  Your Account created date
              </label>
            </div>
          </form>
        </div>
        <div className="titlePut">
          <h2>Your Account </h2>
          <div className="imageContainer">
            <img src={AccountImage} alt="" />
          </div>
        </div>
      </div>
      <div className="btnCenter blackConatiner">
        <LogOut logOut={handleLogOut} />
      </div>
    </>
  );
};

export default Account;
