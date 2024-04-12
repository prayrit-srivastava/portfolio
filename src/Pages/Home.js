import React from 'react';
import style from './Home.module.css';
  const Home = () =>  {
	return (
	  <div>
        <p>Hello, My name is Prayrit and I am </p>
        <p className={style.center}>
        Full Stack Developer</p>
        <p className={style.coder}>& Coder</p>
        <p>Based in India</p>
        <img></img>
	  </div>
	);
  }
  
  export default Home;
  