import React from 'react';
import style from './skillbox.module.css';
  
  const Skillbox = ({skill}) =>  {

	return (
    <>
    {
        skill.experience == 'beginner'
        ?
            <div className={style.beginner}>
            <p>{skill.name}</p>
            </div>
                
        :
        skill.experience == 'intermediate'?

            <div className={style.intermediate}>
                    <p>{skill.name}</p>
                    </div>
        :
        <div className={style.proficient}>
                    <p>{skill.name}</p>
                    </div>
        
    }
    </>
	);
  }
  
  export default Skillbox;
  