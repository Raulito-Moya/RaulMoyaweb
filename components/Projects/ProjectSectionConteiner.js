import styles from '../../styles/Home.module.css'
import { Project } from './Project'

export const ProjectSectionConteiner = ({KindOfProjects,projects,setElement,setShowModal}) => {
 

    return( 
        <>
        <h2 className={styles.project_kind_intro} >{KindOfProjects}</h2>
        <div className={styles.project_container}> 
        
          {
              projects.map(project => {
                
 
              return(  
                   <Project projectName={project} 
                            setElement={setElement} 
                            setShowModal={setShowModal}/>
                  )


              })
          }

            
        </div>
        </>
    )


}