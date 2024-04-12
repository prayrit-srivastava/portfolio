import React from 'react';
import Skillbox from '../Component/Skillbox';
import CertificateBox from '../Component/CertificateBox';
import style from './Skills.module.css'
  
  const Skills = () =>  {

    const Domainskill = [{name:"HTML",experience:"proficient"},{name:"CSS",experience:"proficient"},{name:"JavaScript",experience:"proficient"},{name:"React",experience:"proficient"},{name:"Redux",experience:"proficient"},{name:"Firebase",experience:"proficient"},{name:"Node",experience:"proficient"},{name:"Express",experience:"proficient"},{name:"MongoDB",experience:"proficient"},{name:"Mongoose",experience:"proficient"},{name:"Socket.io",experience:"beginner"},{name:"Jest/ Jest-Dom",experience:"proficient"},{name:"Cypress",experience:"proficient"},{name:"AWS",experience:"beginner"},{name:"MySQL",experience:"proficient"}];
    const codingLanguage = [{name:"CPP",experience:"proficient"},{name:"C",experience:"beginner"},{name:"Java",experience:"intermediate"},{name:"Python",experience:"beginner"}];
    const otherskills = [{name:"Adobe PhotoShop",experience:"beginner"},{name:"Adobe Illustrator",experience:"beginner"}];
    const certi = [{name:'Programming for EveryBody',img:''},{name:'',img:''},{name:'',img:''},{name:'',img:''}]
	return (
        <>
        <div>
        these are my tech stack.
        <div >
            <div ><h3>Coding languages</h3>
                <div className={style.language}>
                    {codingLanguage.map((item,ind)=> <Skillbox skill={item} key={ind}/>)}
                </div>
            </div>
            <div><h3>Skills</h3>
                <div className={style.domain}>
                    {Domainskill.map((item,ind)=> <Skillbox skill={item} key={ind}/>)}
                </div>
            </div>
            <div><h3>Other Skills</h3>
                <div className  ={style.other}>
                    {otherskills.map((item,ind)=> <Skillbox skill={item} key={ind}/>)}
                </div>
            </div>
        </div>
	  </div>
      <div>
        <p> These are the some of the certificate I earned over the years</p>
            {certi.map((item,ind)=><CertificateBox certi = {item} key={ind}/>)}
      </div>
      </>

	);
  }
  
  export default Skills;
  