import React from 'react'

const LogOut = (props) => {
    const handleLogOut = props.LogOut;
  return (
    <button onClick={handleLogOut} className="logOut ">
    Logout
  </button>
  )
}

export default LogOut
