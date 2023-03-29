import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import Brand from "./logo/Brand";
const Navbar = () => {
  // declared useNaviagete fun
  const navigate = useNavigate(); 
  // hnadleLogOut func
  const handleLogOut = () => {
      localStorage.removeItem('token');
      navigate("/login");
  }
  // initialize hooks
  const [click, setClick] = useState();
  // handle Clcik func
  const handleClick = () => setClick(!click);
  // close mobile mneu func
  const closeMobileMenu = () => setClick(false);
  return (
    <header id="header">
      <Brand />
      <div className="hamburger" onClick={handleClick}>
        <div className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></div>
      </div>
      <nav className={click ? "navbar active" : "navbar"}>
        <ul>
          <li>
            <NavLink
              onClick={closeMobileMenu}
              to="/"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Home <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileMenu}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileMenu}
              to="/addnote"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Add Note
            </NavLink>
          </li>
          <li>
            {!localStorage.getItem("token") ? (
        
        null

            ): (
              <NavLink
              onClick={closeMobileMenu}
              to="/mynotes"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              MyNotes
            </NavLink>
            )}
          </li>
            {!localStorage.getItem("token")? 
            <> 
          <li>
          
            <NavLink
              onClick={closeMobileMenu}
              to="/login"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileMenu}
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              SignUp
            </NavLink>
          </li>
          </>
          : <button onClick={handleLogOut} className="logOut">Logout</button>}



       
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
