import { useRef, useState,useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ComponentShow from './ComponentShow'
import Modal from '../pages/Modal'
import { mockData } from './mockData'
import { ProyectCarusel } from './ProyectCarusel'

import dynamic from "next/dynamic";
import MyLoader from './Loader'
import { Project } from './Project'

//const Project = dynamic(()=> import("./Project"))

export default function Section3(){
    const [showModal, setShowModal] = useState(false)
    const [element,setElement] = useState('here element')
    
    const [show,setShow] = useState(false)
    const elementref =  useRef()  


    useEffect(()=> {
     
      const onChange = (entries) => {
       
        const el = entries[0] 
        //console.log(entries[0])
        
        if(el.isIntersecting){
  
          setTimeout(()=>{setShow(true)},50) 
        }
      }
  
       const observer = new IntersectionObserver(onChange, {
         rootMargin: '-100px'
       })
    
     observer.observe(elementref.current)
    })


    let project1 = useRef(null);
    let project2 = useRef(null);
    let project3 = useRef(null);
    let project4 = useRef(null);
    let project5 = useRef(null);  
    let project6 = useRef(null);   ;
   // console.log(elementref.current);

   //  console.log(element);
    //console.log(mockData.proyect1);
 return(
     <>
    
    <section className={styles.sub_section_alternative} id="projects"  ref={elementref}>
      <h2 className={styles.project_intro}>Projects:</h2>  

       {  
        show ?
          
          <div className={styles.project_container}>
            <Project   project={project1} projectName={mockData.project1}  setElement={setElement} setShowModal={setShowModal} />
            <Project   project={project2} projectName={mockData.project2}  setElement={setElement} setShowModal={setShowModal} />
            <Project   project={project3} projectName={mockData.project3}  setElement={setElement} setShowModal={setShowModal} />
            <Project   project={project4} projectName={mockData.project4}  setElement={setElement} setShowModal={setShowModal} />
            <Project   project={project5} projectName={mockData.project5}  setElement={setElement} setShowModal={setShowModal} />
            <Project   project={project6} projectName={mockData.project6}  setElement={setElement} setShowModal={setShowModal} />
       
         </div>
           : <MyLoader/>
        
        }  
  </section>
    
  <Modal show={showModal} onClose={()=> setShowModal(false) }>
    <ComponentShow component={element}/>
  </Modal>
  </>
 )


}

