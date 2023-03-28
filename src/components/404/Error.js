import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/notFound.css";
import Button from "../../components/buttons/Button.js";
const Error = () => {
  //  initialieze location variable
  let location = useLocation();
  // use Effect hook
  useEffect(() => {}, [location]); // for showing exact path name ..
  return (
    <div className="ErrorContainer">
      <div className="codePage">
        <h1>
          4<span className="zero">0</span>4
        </h1>{" "}
      </div>
     
      <div className="parsedData">
        <h1>
          <i className="fa-solid fa-search"></i>
          {location.pathname} Page Not Found !
        </h1>
      </div>
      <div className="image">
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/2904/2904859.png"
          alt="not found "
        />
      </div>
      <div className="pleaseBack">
        <h1>Please Go Back</h1>
      </div>
      <div className="btnCenter">
        <Button path="/" name="Go TO Home" icon="fa-solid fa-home" />
      </div>
    </div>
  );
};

export default Error;
