import styles from '../styles/Home.module.css'

export default function Section2(){


 return(
  <section className={styles.sub_section} id="about_me">
    <div className={styles.information}>
       <h2>About Me</h2>
       <p>Hello my name is Raul Moya. I'm a software developer and I would like help you to build great things ....Cuando utilizas el margen y el área de relleno en porcentajes, el valor se calcula a partir del tamaño en línea del elemento, es decir, el ancho del elemento cuando se trabaja en un lenguaje horizontal. En nuestro ejemplo, todos los márgenes y el área de relleno son del 10% del ancho del elemento. Esto significa que puedes tener márgenes y relleno alrededor de la caja del mismo tamaño. Este es un hecho que vale la pena recordar si utilizas porcentajes de esta manera.</p>
    </div>  
    <div className={styles.headshot_container}> 
       <img className={styles.headshot} src="/headphoto.jpg" alt="Raul Moya Photo"/>
       <img className={styles.headshot} src="/headphoto1.jpg" alt=""/>
       <img className={styles.headshot} src="/headphoto2.jpg" alt=""/>
    </div>
      
    <div className={styles.skillscontainer}>
      <h2 className={styles.skillstitle}>Skills:</h2>
  
      <div className={styles.skills}>
         
          <img className={styles.skill_icon} src="/skills/html5.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/css3.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/javascript.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/github.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/react.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/nodejs.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/mongodb.svg" alt=""/>
          <img className={styles.skill_icon} src="/skills/mysql.svg" alt=""/>
      </div>
    </div>
  </section>
 )



};