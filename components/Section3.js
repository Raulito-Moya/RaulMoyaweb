import { useRef, useState,useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ComponentShow from './ComponentShow'
import Modal from '../pages/Modal'
import { mockData } from './mockData'
import { ProyectCarusel } from './ProyectCarusel'


import MyLoader from './Loader'
import { Project } from './Projects/Project'
import { ProjectSectionConteiner } from './Projects/ProjectSectionConteiner'
import { useIntersection } from '../hooks/useIntersection'



export default function Section3(){
    const [showModal, setShowModal] = useState(false)
    const [element,setElement] = useState('here element')
    
  
    const elementref =  useRef()  
    const [show] = useIntersection(elementref)


   const mern  = [ mockData.project1,mockData.project2,mockData.project2,mockData.project3,mockData.project4,mockData.project5,mockData.project6 ]
  
   
 return(
     <>
    
    <section className={styles.sub_section_alternative} id="projects"  ref={elementref}>
      <h2 className={styles.project_intro}>Projects:</h2>  
          
       {  
        show ?
        
           <>
            <ProjectSectionConteiner KindOfProjects="MERN" projects={mern} setElement={setElement} setShowModal={setShowModal}/>
            
         </>
            
           : <MyLoader/>
        
        }  
 
  </section>
    
  <Modal show={showModal} onClose={()=> setShowModal(false) }>
    <ComponentShow component={element}/>
  </Modal>
  </>
 )


}

