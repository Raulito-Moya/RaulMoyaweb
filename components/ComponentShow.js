import { useEffect, useRef } from "react";
import styles from '../styles/Modal.module.css'

export default function ComponentShow({component}){
   //  console.log(component.current);   
        
    let divref = useRef(null)
    
     useEffect(()=>{
         
      divref.current.innerHTML = component.current.innerHTML
 console.log(divref.current);
     })


    return(
      <div ref={divref} className={styles.component}>
          
      </div>


    )


}