import { useRef, useEffect } from "react";

export function useHorizontalScroll(isModal) {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    // console.log(el);
    if (el) {
      const onWheel = e => {
       //console.log(e);
       //console.log(e.scrollLeft);
       //console.log(e.deltaY);
        if (e.deltaY == 0) return;

        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && 
              e.deltaY > 0)
        ) {
          e.preventDefault();
        }

        el.scrollTo( isModal ? {
          
          left: el.scrollLeft + e.deltaY * 3,
          behavior:  "auto" 
        }: {
          left: el.scrollLeft + e.deltaY ,
          behavior:  "smooth" 
        });
        
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}