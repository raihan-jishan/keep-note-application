import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import KeppNote from "../assets/keepWriting.svg";
import "../styles/addNote.css";
import "../styles/button.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/buttons/Button.js";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    toast("Note Added Successful!");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="FormContainer">
        <ToastContainer />
        <div className="form">
          <form className="form">
            <div className="forms">
              <label htmlFor="title" className="form-label">
                <i className="fa-solid fa-comment"></i> Title
              </label>
              <input
                placeholder="Your Title"
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                value={note.title}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="forms">
              <label htmlFor="description" className="form-label">
                <i className="fa-solid fa-pen"></i> Description
              </label>
              <input
                type="text"
                placeholder="Your Description"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="forms">
              <label htmlFor="tag" className="form-label">
                <i className="fa-solid fa-tag"></i> Tag
              </label>
              <input
                type="text"
                placeholder="Your Tag"
                className="form-control"
                id="tag"
                name="tag"
                value={note.tag}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>

            <div className="btnCenter">
              <button
                style={{ border: "0px" }}
                disabled={note.title.length < 5 || note.description.length < 5}
                className="addBtn"
                type="submit"
                onClick={handleClick}
              >
                add note <i className="fa-solid fa-pen"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="titlePut">
          <h2>Add Your Notes</h2>
          <div className="imageContainer">
            <img src={KeppNote} alt="" />
          </div>
        </div>
      </div>
      <div className="title">
        <h2>You gonna see your svaed notes ?</h2>
      </div>
      <div className="btnCenter">
        <Button
          name="View Saved Notes"
          icon="fa-solid fa-cloud"
          path="/mynotes"
        />
      </div>
    </>
  );
};

export default AddNote;
