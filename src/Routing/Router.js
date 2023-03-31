import React from "react";
import { Routes, Route } from "react-router-dom"; // from react-router
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import NotFound from "../components/404/Error.js";
import AddNote from "../pages/AddNote.js";
import SignUp from "../Auth/SignUp";
import Login from '../Auth/Login.js';
import Account from '../account/Account.js'
import Notes from "../components/Notes.js";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/addnote" element={<AddNote />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/mynotes" element={<Notes />} /> 
      <Route path="/account" element={<Account />}/>
      {/* 404 error page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
