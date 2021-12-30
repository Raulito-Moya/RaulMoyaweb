import { useState, useEffect } from "react";
import stylesModal from '../styles/Modal.module.css'
import styles from '../styles/Carusel.module.css'
import  ReactDOM  from "react-dom";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { ProyectCarusel } from "../components/ProyectCarusel";

export default function Modal({show, onClose, children, title,component}){

 const [isBrowser, setisBrowser] = useState(false)
 console.log(children)
 
 const scrollRef = useHorizontalScroll() 

  useEffect(()=> {

    setisBrowser(true)

  },[])

 const handleClose = (e) => {
    e.preventDefault();
    onClose()
 }
 


  const modalContent = show ? 
  
  (
     <div className={stylesModal.overlay}>
        <div className={stylesModal.modal}>
            <div className={stylesModal.header}>
                <a href="#">
                <button type="button" className={stylesModal.closeButton} onClick={handleClose}>Close</button>
                </a>
              
            </div>
              
        <ProyectCarusel proyect={component}/>

        </div>
      
     </div>


  ) : null

  
  if(isBrowser){
      return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
      )
  } else {
      return null
  }
  
 
}