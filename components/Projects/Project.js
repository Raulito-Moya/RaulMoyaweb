 import React, { useRef } from 'react'
 import styles from '../../styles/Home.module.css'
 import { mockData } from '../mockData'
 import { ProyectCarusel } from './ProyectCarusel'

 export const Project = ({setElement,setShowModal,project }) => {
      
     
         //console.log(project);
     //const project = useRef(null)
     let prop = mockData.project

    return(
        <div className={styles.project_card}  onClick={()=> {setElement(project)  ; setShowModal(true)} }>
          <ProyectCarusel proyect={project}/>
        </div>
    )


 }