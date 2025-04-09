import { useEffect } from "react";
import debounce from "lodash/debounce";

export default function useResize(callback, delay = 300) {
  // const timerRef = useRef(null); // 이하 debounce로 대체
  useEffect(() => {
    // const handleResize = () => {
    //   if (timerRef.current) {
    //     clearTimeout(timerRef.current);
    //   }
    //   timerRef.current = setTimeout(() => {
    //     callback();
    //     console.log("resize");
    //   }, delay)
    // }
    const handleResize = debounce(callback, delay);
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup 
      window.removeEventListener("resize", handleResize);
      // if (timerRef.current) {
        // clearTimeout(timerRef.current)
      // }
      handleResize.cancel();
    }
  }, [callback, delay]);
}