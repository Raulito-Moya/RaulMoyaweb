import { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ComponentShow from './ComponentShow'
import Modal from '../pages/Modal'
import { mockData } from './mockData'
import { ProyectCarusel } from './ProyectCarusel'



export default function Section3(){
    const [showModal, setShowModal] = useState(false)
    const [element,setElement] = useState('here element') 
    


    let project1 = useRef(null);
    let project2 = useRef(null);
    let project3 = useRef(null);
    let project4 = useRef(null);
    let project5 = useRef(null);
   // console.log(elementref.current);

     
    //console.log(mockData.proyect1);
 return(
     <>
    <section className={styles.sub_section_alternative} id="projects">
      <h2 className={styles.project_title}>Projects</h2>  
      <div className={styles.project_container}>
        <div ref={project1} className={styles.project_card}  onClick={()=> {setElement(project1)  ; setShowModal(true)} }>
           <ProyectCarusel proyect={mockData.proyect1}/>
        </div>
        <div ref={project2} className={styles.project_card}   onClick={()=> {setElement(project2)  ; setShowModal(true)} }>
          <ProyectCarusel proyect={mockData.proyect2}/>
        </div>
        <div ref={project3} className={styles.project_card}   onClick={()=> {setElement(project3)  ; setShowModal(true)} }>
          <ProyectCarusel proyect={mockData.proyect3}/>
        </div>
        <div ref={project4} className={styles.project_card}   onClick={()=> {setElement(project4)  ; setShowModal(true)} }>
           <ProyectCarusel proyect={mockData.proyect4}/>
        </div>
        <div ref={project5} className={styles.project_card}   onClick={()=> {setElement(project5)  ; setShowModal(true)} }>
          <ProyectCarusel proyect={mockData.proyect5}/>
        </div>
     </div>

  </section>
  <Modal show={showModal} onClose={()=> setShowModal(false) }>
    <ComponentShow component={element}/>
  </Modal>
  </>
 )


}

