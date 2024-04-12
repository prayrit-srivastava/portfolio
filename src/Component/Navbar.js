import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {/* <h3>
        █▀█ █▀█ ▄▀█ █▄█ █▀█ █ ▀█▀
        <br />
        █▀▀ █▀▄ █▀█ ░█░ █▀▄ █ ░█░
      </h3> */}
      <div className={style.references}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>

        <a href="Projects">Projects</a>
        <a href="/connect">Connect</a>
        <a href="/resume">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
