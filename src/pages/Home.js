import React from "react";
import "../styles/home.css";
import Note from "../assets/note.svg";
import Button from "../components/buttons/Button.js"; 
import About from "./About.js";
const Home = () => {
  return (
    <section className="homeLayout">
      <div className="container">
        <div className="titleDesc">
          <h2>Keep Your Notes Organized by </h2>
          <h3 className="logoCenter">Keep-Note</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            omnis?
          </p>
          <div className="btnCenter">
            <Button
              path="/addnote"
              name="Add Note"
              icon="fa-solid fa-arrow-right"
            />
          </div>
        </div>
        <div className="row">
          <img src={Note} alt="module file not found!" />
        </div>
      </div>
      <About />
     
    </section>
  );
};

export default Home;
