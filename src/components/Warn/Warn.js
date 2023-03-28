import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/warn.css";
const Warn = (props) => {
  return (
    <div className='warnContainer'>
          <div className='propsWarn'>
        <h4>{props.name}</h4>

      </div>
         <div className='createAccountCenter'>
            <Link to={props.path} className="createAccount">{props.button}   <i className={props
            .icon}></i></Link>
      </div>
    
     
    </div>
  )
}

export default Warn
