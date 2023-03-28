import React from "react";
import "../styles/about.css";
import Button from "../components/buttons/Button.js";
const About = () => {
  return (
    <section className="aboutLayout" id="about">
      <div className="aboutContainer">
        <div className="title">
          <h2>About App</h2>
        </div>
        {/* features */}
        <div className="appFeauture">
          <h2>app Features </h2>
        </div>
        {/* app feature table */}
        <div className="row">
          <div className="rows">
            <h1>
              <i className="fa-solid fa-book"></i> Organized Note
            </h1>
            <p>all your note by your user name and password</p>
          </div>
          <div className="rows">
            <h1>
              <i className="fa-solid fa-file-shield"></i> Save & Secure
            </h1>
            <p>Your notes are save and secure from hacker & attackers... </p>
          </div>
          <div className="rows">
            <h1>
              <i className="fa-solid fa-door-open"></i> All-ways accessable
            </h1>
            <p>Your notes are all ways accessable, When you need ..</p>
          </div>
        </div>
        <div className="row">
          <div className="rows">
            <h1>
              0<i className="fa-solid fa-dollar-sign"></i> Free Of Cose
            </h1>
            <p>
              We doestn't have any paid plan . In fact what ever we realease
              paid plan , But you couldn't fee any cost about that.{" "}
            </p>
          </div>
          <div className="rows">
            <h1>
              <i className="fa-solid fa-truck-fast"></i> Fast & Realiable{" "}
            </h1>
            <p>
              Our application is build on fast Realiable unit. And our server
              functionilty is onother level.{" "}
            </p>
          </div>
          <div className="rows">
            <h1>
              <i className="fa-solid fa-user-plus"></i> 24/7 Support{" "}
            </h1>
            <p>
              You find 24/7 support on{" "}
              <a href="https://facebook.com"> facebook page </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>Why we are ? </h2>
      </div>
      <div className="array">
        <div className="arrays">
          <h2>
            <i className="fa-solid fa-users"></i> Like A Freinds{" "}
          </h2>
          <p>
            We take your notes like a freind.. And secure-it on your data-base.{" "}
          </p>
        </div>
        <div className="arrays">
          <h2>
            <i className="fa-solid fa-shield-halved"></i> Privacy Options
          </h2>
          <p>
            Your data are end-to-end encrypted. Any third-person couldn't access
            your infos....
          </p>
        </div>
        <div className="arrays">
          <h2>
            <i className="fa-solid fa-handshake-angle"></i> Help To Organized
          </h2>
          <p>We are help to you keep Organized by using keep note</p>
        </div>
      </div>
      <div className="title">
        <h2>If Save Any Note , ?</h2>
      </div>
      <div className="btnCenter">
        <Button path="/addnote" name="Save Note" icon="fa-solid fa-cloud" />
      </div>
      <div className="title">
        <h2>If You Want To Study About US , Please Contact On </h2>
      </div>
      <div className="socialLinks">
        <div className="rows links">
          <i className="fa-brands fa-facebook"></i>
          <h4>www.facebook.com/keep-note</h4>
        </div>
        <div className="rows links">
          <i className="fa-brands fa-google"></i>
          <h4>www.keep-note.com</h4>
        </div>
        <div className="rows links">
          <i className="fa-solid fa-envelope"></i>
          <h4>keep-note@gmail.com</h4>
        </div>
        <div className="rows links">
          <i className="fa-brands fa-github"></i>
          <h4>www.github.com/keep-note</h4>
        </div>
      </div>
    </section>
  );
};
export default About;
