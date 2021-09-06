import { useState, useEffect } from "react";
import styles from '../styles/Modal.module.css'
import  ReactDOM  from "react-dom";

export default function Modal({show, onClose, children, title}){

 const [isBrowser, setisBrowser] = useState(false)

  useEffect(()=> {

    setisBrowser(true)

  },[])

 const handleClose = (e) => {
    e.preventDefault();
    onClose()
 }


  const modalContent = show ? (
     <div className={styles.overlay}>
        <div className={styles.modal}>
            <div className={styles.header}>
                <a href="#">
                <button type="button" className={styles.closeButton} onClick={handleClose}>Close</button>
                </a>
              
            </div>
            <div className={styles.body}>{children}</div>
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