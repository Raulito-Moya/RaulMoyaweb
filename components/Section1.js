import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { gsap } from "gsap";
import  AnimaBox  from '../components/Animations/AnimaBox';
import { FadeIn } from './Animations/FadeIn';




export default function Section1(){
    
  const boxRef = useRef();
  const boxRef2 = useRef();


  let navref = useRef(null);
  let listref = useRef(null);
  let AtitleRef = useRef(null);
  const q = gsap.utils.selector(AtitleRef);
 // const p = gsap.utils.selector(navref);
  
  const listProps = {
      x: 100,
      
      stagger: 2.0,
      repeat: 1, 
      repeatDelay: 1,
      yoyo: true
    
  }
 
  const textProps = {
    y: -150,  
    stagger: 2.33,
    repeat: 1, 
    repeatDelay: 1, 
    yoyo: true,
    rotation: "+=360"

  }
  
  useEffect(() => {
    //gsap.to(q(".Home_hero_author__n9TWn"), { y: -150,  stagger: 2.33,repeat: 1, repeatDelay: 1, yoyo: true,rotation: "+=360"  }); 
    //gsap.to(q(".Home_hero_title__1I52o"), { x: +200,  stagger: 2.33,repeat: 1, repeatDelay: 1, yoyo: true,rotation: "-=360"  }); 
    
  /*  gsap.to(p(".lista"), {
      x: 200,y:200,stagger: 2.33,repeat: 1, repeatDelay: 1,yoyo: true
    });*/

  },[boxRef]);

  console.log(listref);
  console.log(AtitleRef);
      function toggleBotton(){
           
        navref.current.classList.toggle('show') 
        //navList.classList.toggle('show')
        //console.log(navref.current);
      }
  
 
 return(
    
      <>
        <section className={styles.hero}>
         <nav className={styles.hero_nav} >
           <img  src="/Raul_logo2.png"  className={styles.logo} alt="RauL Moya Logo"/>
        
             
       <AnimaBox edx={20} ref={boxRef} class1=".lista" objectprops={listProps}>
            <ul  className={styles.menu} ref={navref}>
               <li ref={listref}  className="lista"> <a  href="#about_me" className={styles.navlist}>About me</a> </li>
               <li ref={listref} className="lista"> <a  href="#projects" className={styles.navlist}>Projects</a> </li>
               <li ref={listref} className="lista"> <a  href="#contact-me" className={styles.navlist}>Contact</a> </li>
            </ul>
        </AnimaBox> 
            <FadeIn vars={{ x: 100,y:200 }}>
            
               <button  type="button" className={styles.hamburger}  onClick={toggleBotton}>
                <svg aria-hidden="true"  focusable="false" data-prefix="fas" data-icon="hamburger" className="svg-inline--fa fa-hamburger fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path></svg>
              </button>
              
            </FadeIn>
              
             
         
         </nav>
         <div className={styles.hero_area} >
           <div className={styles.hero_text} ref={AtitleRef}>
           
           <AnimaBox  ref={boxRef2}  objectprops={textProps} >
              <h1 className={styles.hero_author}>Raul Moya</h1>
              <p className={styles.hero_title}>Full Stack Developer</p>
              <div className={styles.button}><a href="#about_me">About me</a> </div>
            </AnimaBox>

           </div>
          <FadeIn vars={{ x: 100 }}>
           <div className={styles.socials}>
              <a href="https://linkedin.com/in/raul-moya-9771a7203" className={styles.social}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/Raulito-Moya" className={styles.social}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
           </div> 
          </FadeIn>
         </div>
      </section>
      
      
      </>


 )


}