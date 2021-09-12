import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Section2(){


 return(
  <section className={styles.sub_section} id="about_me">
    <div className={styles.information}>
       <h2>About Me</h2>
       <p>Hello my name is Raul Moya. I m a junior Full-Stack developer and I am very passionate about this world of web development, I like learning and continuous practice, so if you need me to work on another technology, I can learn it. Soo if you have a great idea I can help you to create it, do not hesitate to contact me below. </p>
       
       <ul className={styles.hobies_list}>
       <h2>Hobbies:</h2>
         <li>Swing🏊‍♀️</li>
         <li>videogames🎮</li>
         <li>workout🏋️‍♂️</li>
         <li>movies🎬</li>
         
       </ul>
      
    </div>  
    <div className={styles.headshot_container}> 
       <img className={styles.headshot} src="/headphoto1.jpg"  alt="Raul Moya Photo"/>
       <img className={styles.headshot} src="/headphoto2.jpg"  alt="Raul Moya Photo"/>
       <img className={styles.headshot} src="/headphoto.jpg"   alt="Raul Moya Photo"/>
    </div>
      
    <div className={styles.skillscontainer}>
      <h2 className={styles.skillstitle}>Skills:</h2>
  
      <div className={styles.skills}>
         
          <img className={styles.skill_icon}  src="/skills/html5.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/css3.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/javascript.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/github.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/react.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/next-js.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/nodejs.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/jest.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/mongodb.svg" alt="skill_image"/>
          <img className={styles.skill_icon}  src="/skills/mysql.svg" alt=""/>
          
      </div>
     
    </div>
    
  </section>
 )



};