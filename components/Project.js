 import React from 'react'
 import styles from '../styles/Home.module.css'
 import { mockData } from './mockData'
 import { ProyectCarusel } from './ProyectCarusel'

 export const Project = ({ project,setElement,setShowModal,projectName }) => {
        console.log(typeof projectName)
         //console.log(project);
     
    let prop = mockData.project

    return(
        <div ref={project}  className={styles.project_card}  onClick={()=> {setElement(project)  ; setShowModal(true)} }>
          <ProyectCarusel proyect={projectName}/>
        </div>
    )


 }