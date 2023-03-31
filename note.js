import React from 'react';
import accountImage from "../assets/account.svg"
import "../styles/account.css";
const Account = () => {
  return (
    <div className='accountContainer'>
      <h1>My Account </h1>
      <div className="accountRow Info">
            <h2>Name</h2> 
            <h2>email</h2>
            <h3>password</h3>
      </div>
      <div className="accountImageRow">
        <img src={accountImage} alt="404 module not found !" />
      </div>
    </div>
  )
}

export default Account