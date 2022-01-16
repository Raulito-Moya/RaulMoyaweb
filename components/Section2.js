import { useEffect, useRef, useState } from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import { useIntersection } from '../hooks/useIntersection'
import styles from '../styles/Home.module.css'
import { HeadShots } from './HeadShots'


export default function Section2(){
  
  
    const elementref =  useRef()  
    const [show] = useIntersection(elementref)
  
   

 return(
  <section className={styles.sub_section} id="about_me">
    <div className={styles.information}>
       <h2>About Me:</h2>
       <p className={styles.personal_information}>
         Hello my name is Raul Moya. I am a junior Full-Stack developer, and I am very passionate about this world of web development, I like learning and continuous practice, so if you need me to work on another technology, I can learn it. If you have a great idea I can help you to create it, do not hesitate to contact me below. 
       </p>
       
       <ul className={styles.hobies_list}>
       <h2>Hobbies:</h2>
         <li>Swin🏊‍♀️</li>
         <li>Videogames🎮</li>
         <li>Workout🏋️‍♂️</li>
         <li>Movies🎬</li>
         
       </ul>
      
    </div>  
  {show && (

   <HeadShots/>

  )} 
      
    <div className={styles.skillscontainer}>
      <h2 className={styles.skillstitle}>Skills:</h2>
  
      <div className={styles.skills} ref={elementref}>
         {
           show && (

            <>
            <img className={styles.skill_icon}  src="/skills/html5.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/css3.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/javascript.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/github.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/react.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/next-js.svg" alt="skill_image"/>
            <img className={styles.skill_icon} src="/skills/angularjs.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/nodejs.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/jest.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/mongodb.svg" alt="skill_image"/>
            <img className={styles.skill_icon}  src="/skills/mysql.svg" alt=""/>
           </>

           )
         }
         
          
      </div>
     
    </div>
    
  </section>
 )



};