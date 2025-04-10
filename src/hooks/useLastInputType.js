import { useEffect, useRef, useState } from "react";

export default function useLastInputType() {
  const [type, setType] = useState("mouse");
  const lastTypeRef = useRef(type);
  useEffect(() => {
    lastTypeRef.current = type;
  },[type])
  useEffect(() => {
    const handleKeyDown = () => {
      if (lastTypeRef.current === "keyboard") return;
      lastTypeRef.current = "keyboard"
      setType("keyboard")
    };
    const handleMouseDown = () => {
      if (lastTypeRef.current === "mouse") return;
      lastTypeRef.current = "mouse"
      setType("mouse")
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return type;
}