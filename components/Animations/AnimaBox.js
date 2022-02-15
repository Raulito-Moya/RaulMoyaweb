import React, { useRef, useEffect, forwardRef } from 'react'
import { gsap } from "gsap";

const AnimaBox = forwardRef((props, ref) => {

  const p = gsap.utils.selector(ref);

  console.log(p);
  console.log(ref.current);
 
   useEffect(() => {
    /* gsap.to(boxRef.current, {
       x: endX
     });*/
 
     gsap.to(p(".Home_hero_author__n9TWn"), props.objectprops); 
     gsap.to(p(".Home_hero_title__1I52o"), props.objectprops); 
     
     
    
      // gsap.to(p(props.class1), props.objectprops);
 
   }, [props.endx,ref]);
 
 
   return (
     <div  className="box" ref={ref}> {props.children} </div>
   )


})

AnimaBox.displayName = 'AnimaBox';

 

export default AnimaBox 
