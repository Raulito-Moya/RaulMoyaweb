import { useState,useEffect, useRef } from "react"



export const useIntersection =(elementref,rootMargin) => {
  
    const [show,setShow] = useState(false)

    console.log(rootMargin)
   
    useEffect(()=> {
     
        const onChange = (entries) => {
         
          const el = entries[0] 
          //console.log(entries[0])
          
          if(el.isIntersecting){
    
            setTimeout(()=>{setShow(true)},50) 
          }
        }
    
         const observer = new IntersectionObserver(onChange, {
           rootMargin: rootMargin|| '-100px'
         })
      
       observer.observe(elementref.current)
      })


    return [show]

}