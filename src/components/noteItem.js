import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import "../styles/noteItem.css";
import { toast } from "react-toastify";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showUpdate } = props;
  // initialize useStete hook 
  const [click, setClick ] = useState(false);
  // handle Click open tab
  const handleClick = () => { 
      setClick(!click);
  }
  // handleClose close tab 
  const handleClose = () => {
    setClick(false)
  }
  return (
    <>
     {click ? (
    <div className="alertContainer">
      <h2>You Want to Delete<span className="title center"> {note.title} </span>Note </h2>
      <div className="btnCenter"> 
      <button  onClick={() => {
            deleteNote(note._id);
            toast.dark("Delete note successful!");
          }} className="addBtn" style={{border:'0px', margin:'5px'}}>OK</button>
          <button onClick={handleClose} className="addBtn" style={{border:'0px'}}>Close</button>
          </div>
    </div>

      ) : null}
    <div className="video">
      
      <p className="vedioTitle">{note.title}</p>
      <p className="vedioDesc">{note.description}</p>
      <p className="noteTag">#{note.tag}</p>
      <div className="qmeta">
        <i
          className="far fa-trash-alt mx-2"
          onClick={handleClick}
        ></i>

        <i
          className="far fa-edit mx-2"
          onClick={() => {
            updateNote(note);     
            showUpdate();
          }}
        ></i>
      </div>
    </div>
    </>
  );
};

export default Noteitem;
