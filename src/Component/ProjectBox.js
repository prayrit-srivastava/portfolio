import React from 'react';
import  style  from './Project.module.css';
  
  const ProjectBox = ({project}) =>  {
	return (
	  <div className={style.box}>
        <h4>{project.name}</h4>
        <p>{project.des}</p>
        {project.hosted_link?<a href={project.hosted_link}>Hosted Link</a>:<></>}
        {project.code_link?<a href ={project.code_link}>Code Link</a>:<></>}
	  </div>
	);
  }
  
  export default ProjectBox;
  