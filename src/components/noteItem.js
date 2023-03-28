import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "../styles/noteItem.css";
import { toast } from "react-toastify";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showUpdate } = props;
  return (
    <div className="video">
      <p className="vedioTitle">{note.title}</p>
      <p className="vedioDesc">{note.description}</p>
      <p className="noteTag">#{note.tag}</p>
      <div className="qmeta">
        <i
          className="far fa-trash-alt mx-2"
          onClick={() => {
            deleteNote(note._id);
            toast.dark("Delete note successful!");
          }}
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
  );
};

export default Noteitem;
