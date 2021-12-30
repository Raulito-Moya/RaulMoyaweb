import styles from '../../styles/Home.module.css'
import { Project } from './Project'

export const ProjectSectionConteiner = ({KindOfProjects,projects,setElement,setShowModal}) => {
 //console.log(projects);

    return( 
        <>
        <h2 className={styles.project_kind_intro} >{KindOfProjects}</h2>
        <div className={styles.project_container}> 
        
          {
              projects.map(project => {
                
 
              return(  
                   <Project project={project} 
                            setElement={setElement} 
                            setShowModal={setShowModal}/>
                  )


              })
          }

            
        </div>
        </>
    )


}