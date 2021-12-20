import { useState,useEffect, useRef } from "react"



export const useIntersection =(elementref) => {
  
    const [show,setShow] = useState(false)

    
   
    useEffect(()=> {
     
        const onChange = (entries) => {
         
          const el = entries[0] 
          //console.log(entries[0])
          
          if(el.isIntersecting){
    
            setTimeout(()=>{setShow(true)},50) 
          }
        }
    
         const observer = new IntersectionObserver(onChange, {
           rootMargin: '-100px'
         })
      
       observer.observe(elementref.current)
      })


    return [show]

}