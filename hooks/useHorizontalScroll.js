import { useRef, useEffect } from "react";

export function useHorizontalScroll(behaviorkind) {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    console.log(el);
    if (el) {
      const onWheel = e => {
        console.log(e);
        console.log(e.deltaY);
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: behaviorkind || "auto"
        });
        
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}