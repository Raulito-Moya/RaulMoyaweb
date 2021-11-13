import { useEffect, useRef } from "react";
import styles from '../styles/Modal.module.css'

export default function ComponentShow({component}){
 // console.log(component);   

    let divref = useRef(null)
    
     useEffect(()=>{
         
      divref.current.innerHTML = component.current.innerHTML
   
      divref.current.childNodes[1].lastChild.childNodes[2].children[0].onclick = () => { console.log('hi'); document.write('wait a moment, loading app in progress...')}
     
     })


    return(
      <div ref={divref} className={styles.component}>
          
      </div>


    )


}