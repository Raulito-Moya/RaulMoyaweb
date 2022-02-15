import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { useIntersection } from "../../hooks/useIntersection";


 export function FadeIn({ children, vars,events,classes }) {

   

    const el = useRef();
    const [show] = useIntersection(el,'0px');
     
     const [scrollvalue, setScrollValue]= useState(null)
     const q = gsap.utils.selector(el);
   
    const scroll = (e ) => {
        console.log(e);
        gsap.from(q(classes[0]), { 
            opacity: 0,
          
            ...vars
          }); 

          setScrollValue(true)
    }
    
   

   //console.log(el.current?.children);
    useLayoutEffect(() => {  
        if(show === true){
     
         for(let i = 0; i < el.current.children.length; i++){
           
          let entries = events && Object.keys(events)
           let values = events && Object.values(events) 

            gsap.from( el.current.children[i], { 
                opacity: 0,
                delay: i * 0.2,
                ...vars,
              
                  x: vars.y && vars.x[i] || 0,
                  y:  vars.y  && vars.y[i] || 0,
              }); 


              events && el.current.children[i].addEventListener(entries[0], values[0]);
              events && el.current.children[i].addEventListener(entries[1], values[1]);
         }
        }  
    }, [show,el.current]);
          
    return(
        <div ref={el} >{ show && children}</div>
    ) 
  }
    
 /* function App() {      
    return (
      <FadeIn vars={{ x: 100 }}>
        <div className="box">Box</div>
      </FadeIn>
    );
  }*/