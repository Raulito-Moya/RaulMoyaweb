import { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ComponentShow from './ComponentShow'
import Modal from '../pages/Modal'


export default function Section3(){
    const [showModal, setShowModal] = useState(false)
    const [element,setElement] = useState('here element') 
    
    let project1 = useRef(null);
    let project2 = useRef(null);
    let project3 = useRef(null);
    let project4 = useRef(null);
    let project5 = useRef(null);
   // console.log(elementref.current);

    

 return(
     <>
    <section className={styles.sub_section_alternative} id="projects">
      <h2 className={styles.project_title}>Projects</h2>  
      <div className={styles.project_container}>
        <div ref={project1} className={styles.project_card}  onClick={()=> {setElement(project1)  ; setShowModal(true)} }>
           <Image className={styles.project_image}  src="/project-image.png" width={200} height={100}  layout="responsive"  alt=""/>
           <h3 className={styles.project_title}>Healty Habits</h3>
           <p className={styles.subtext} >This a community blog about nutrition habits, where you can become a member and upload your articles and posts on specific topics of healthy habits </p>
           <hr/>
           <p className={styles.link}>View Here</p>
        </div>
        <div ref={project2} className={styles.project_card}   onClick={()=> {setElement(project2)  ; setShowModal(true)} }>
           <Image className={styles.project_image} width={200} height={100}  layout="responsive"  src="/project-image.png" alt=""/>
            <h3 className={styles.project_title}>Project Two</h3>
           <p className={styles.subtext}>This its a Calendar App  where you can become a member and register events with descriptions at a specific time in your calendar </p>
           <hr/>
           <p className={styles.link}>View Here</p>
        </div>
        <div ref={project3} className={styles.project_card}   onClick={()=> {setElement(project3)  ; setShowModal(true)} }>
          <Image className={styles.project_image} width={200} height={100}  layout="responsive"  src="/project-image.png" alt=""/>
            <h3>Project Three</h3>
           <p className={styles.subtext}>If you like Marvel or DC comics, you will surely like this application, with this simple application you can see a series of cards about Marvel and DC characters and see information about them </p>
           <hr/>
           <p className={styles.link}>View Here</p>
        </div>
        <div ref={project4} className={styles.project_card}   onClick={()=> {setElement(project4)  ; setShowModal(true)} }>
           <Image className={styles.project_image} width={200} height={100}  layout="responsive"  src="/project-image.png" alt=""/>
             <h3 className={styles.project_title}>Project fourth</h3>
           <p className={styles.subtext}>maybe you don t want to keep your notes in solid right? And thats why I present you this JournalApp application, here you can become a member and add your notes with images and description included, I hope you enjoy it </p>
           <hr/>
           <p className={styles.link}>View Here</p>
        </div>
        <div ref={project5} className={styles.project_card}   onClick={()=> {setElement(project5)  ; setShowModal(true)} }>
           <Image className={styles.project_image} width={200} height={100}  layout="responsive"  src="/project-image.png" alt=""/>
             <h3 className={styles.project_title}>Project Fight</h3>
           <p className={styles.subtext}>If you like music why not keep an eye on Spotify, in this application you can search for the most recent albums of your favorite artists and click on the link and go directly to the spotify platform and listen to them, enjoy it </p>
           <hr/>
           <p className={styles.link}>View Here</p>
        </div>
     </div>

  </section>
  <Modal show={showModal} onClose={()=> setShowModal(false) }>
    <ComponentShow component={element}/>
  </Modal>
  </>
 )


}

