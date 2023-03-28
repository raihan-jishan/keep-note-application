import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "../components/noteItem.js";
import { ToastContainer, toast } from "react-toastify";
import "../styles/note.css";
import { useNavigate } from "react-router-dom";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  //  useNaviagte hook
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')) {
      getNotes();

    }else{
        navigate("/login");
    }
  }, );
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  // upadte note func
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  // handleClick func
  const handleClick = (e) => {
    toast("Note Upadted Successful!");
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    toast.success("Note Upadated Successful!");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  // useState hook initailize
  const [close, setClose] = useState(false);
  // closeUpdate
  const closeUpdate = () => {
    setClose(false);
  };
  //  showUpdate func
  const showUpdate = () => {
    setClose(!close);
  };
  return (
    <>
      <h2 className="title">You Notes</h2>
      <ToastContainer />
      <div className="keepConatainer">
        <div
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></div>

        {close ? (
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Note
                  </h5>
                </div>
                <div className="modal-body">
                  <form className="form">
                    <div className="forms">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        value={note.etitle}
                        aria-describedby="emailHelp"
                        onChange={onChange}
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="forms">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        value={note.edescription}
                        onChange={onChange}
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="forms">
                      <label htmlFor="tag" className="form-label">
                        Tag
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        value={note.etag}
                        onChange={onChange}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <div className="btnCenter">
                    <button
                      className="addBtn"
                      style={{ border: "0" }}
                      disabled={
                        note.etitle.length < 5 || note.edescription.length < 5
                      }
                      onClick={handleClick}
                      type="button"
                    >
                      Update Note <i className="fa-solid fa-check"></i>
                    </button>
                    <button
                      className="addBtn"
                      style={{ border: "0" }}
                      onClick={closeUpdate}
                    >
                      close <i className="fa-solid fa-remove"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/*  main notes  */}
      <div className="videos">
        <div className="warning">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              note={note}
              showUpdate={showUpdate}
            />
          );
        })}
      </div>
      {/* end there  */}
    </>
  );
};

export default Notes;
