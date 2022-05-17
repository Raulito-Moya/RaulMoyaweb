import styles from '../../styles/Carusel.module.css'

import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import { useEffect, useRef, useState } from 'react'


export const ProyectCarusel = ({proyect,isModal}) => {
  
   
   const scrollRef = useHorizontalScroll(isModal)
 // console.log(scrollRef);
 //console.log(proyect);
 const handledeploy = (e)=>{
    e.stopPropagation()
    //  document.write('wait a moment, loading app in progress...')
     window.open(proyect.link, "Diseño Web")
   
 }

 const handlegit = (e)=>{
  e.stopPropagation()
  //  document.write('wait a moment, loading app in progress...')
   window.open(proyect.github, "Diseño Web")
 
}




 return(
     <>
        
       <div  ref={scrollRef}  className={styles.carusel_container} >
           <img className={styles.image} src={ proyect.images[0].src || proyect.images[0] } alt="proyect_image"/>
           <img className={styles.image} src={proyect.images[1].src  || proyect.images[1]} alt="proyect_image"/>
           <img className={styles.image} src={proyect.images[2].src  || proyect.images[2]} alt="proyect_image"/>
       </div>
       <div className={styles.rest_content}>
         <h2 >{proyect.title}</h2>
         <p>{proyect.description}</p>
         <div className={styles.list_container}>
             <h3 className={styles.introList}>Technologies:</h3>
           <ul className={styles.tech_list}>
              {
                  proyect.technologies.map((item,key) => 
                     (
                      <li className={styles.list_item} key={key} >
                         {item}
                       </li>
                        ) 
                  )
              }
            </ul>
        
        </div>
        <hr/>
        <div className={styles.linkstoproyect}>
          
         <a  className={styles.linkgit} onClick={handlegit}>
          <img src="https://res.cloudinary.com/dx33ki9ul/image/upload/v1652747157/github_dsswkl.png" alt="" className={styles.logogit}/>
          
         </a>
         <span style={{color:"black"}}>github code</span>

         <h2 style={{marginTop:"40px"}} > <a className={styles.link}  onClick={handledeploy}>View deploy here</a> </h2> 
        </div>
         
       </div>
   
     </>
 )
 

}