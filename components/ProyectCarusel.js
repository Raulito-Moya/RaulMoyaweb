import styles from '../styles/Carusel.module.css'
import github from '../public/github.png'


export const ProyectCarusel = ({proyect}) => {

 // console.log(proyect);

 const handledeploy = (e)=>{
    e.stopPropagation()
     document.write('wait a moment, loading app in progress...')
   
 

 }

 return(
     <>
        
       <div className={styles.carusel_container}>
           <img className={styles.image} src={proyect.images[0].src} alt="proyect_image"/>
           <img className={styles.image} src={proyect.images[1].src} alt="proyect_image"/>
           <img className={styles.image} src={proyect.images[2].src} alt="proyect_image"/>
       </div>
       <div className={styles.rest_content}>
         <h2>{proyect.title}</h2>
         <p>{proyect.description}</p>
         <div className={styles.list_container}>
             <h3 className={styles.introList}>Technologies:</h3>
           <ul className={styles.tech_list}>
             {
                 proyect.technologies.map((item,key) => 
                    (<li className={styles.list_item} key={key}>{item}</li>) 
                 )
             }
         </ul>
        
        </div>
        <hr/>
        <div className={styles.linkstoproyect}>
          
         <a href={proyect.github} className={styles.linkgit}>
          <img src="/github.png" alt="" className={styles.logogit}/>
          
         </a>
         <span style={{color:"black"}}>github code</span>

         <h2 style={{marginTop:"40px"}} > <a className={styles.link} href={proyect.link} onClick={handledeploy}>View deploy here</a> </h2> 
        </div>
         
       </div>
   
     </>
 )
 

}