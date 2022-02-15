import { useEffect, useRef, useState } from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import { useIntersection } from '../hooks/useIntersection'
import styles from '../styles/Home.module.css'
import { HeadShots } from './HeadShots'
import { FadeIn } from './Animations/FadeIn';
import { gsap } from "gsap";

export default function Section2(){
  
  
    const elementref =  useRef()  
    const [show] = useIntersection(elementref)
  
      const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {  scale: 1.2 });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {  scale: 1 });
  };
   

 return(
  <section className={styles.sub_section} id="about_me">
    <div className={styles.information}>
    <FadeIn vars={{ x:[ -1000,-1000],y:[2000,2000] }} >
       <h2  className={styles.informationtitle}>About Me:</h2>

       <p  className={styles.personal_information}>
         Hello my name is Raul Moya. I am a junior Full-Stack developer, and I am very passionate about this world of web development, I like learning and continuous practice, so if you need me to work on another technology, I can learn it. If you have a great idea I can help you to create it, do not hesitate to contact me below. 
       </p>
    </FadeIn> 

   
     <ul className={styles.hobies_list}>
     <FadeIn vars={{ x:[-100,-100] ,y:[-200,-200] }} >
       <h2 className={styles.hobbiestitle}>Hobbies:</h2>
     </FadeIn>
     <FadeIn vars={{ x:[-1000,1000,-1000,1000], opacity:0.2 }} >
       <li>Swin🏊‍♀️</li>
       <li>Videogames🎮</li>
       <li>Workout🏋️‍♂️</li>
       <li>Movies🎬</li>
     </FadeIn>  
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
            <FadeIn vars={{ x:[-8000,2000,-8000,8000], y:[-12000,1000,-4000,4000], rotate:360, scale:5.1    } }  events={{'mouseenter':onEnter, 'mouseleave':onLeave}}>
            <img  className={styles.skill_icon}  src="/skills/html5.svg" alt="skill_image"/>
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
            </FadeIn>
           </>

           )
         }
         
          
      </div>
     
    </div>
    
  </section>
 )



};