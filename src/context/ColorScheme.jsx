import React, { createContext, useState, useEffect } from "react";
export const ColorSchemeContext = createContext();
export const ColorSchemeProvider = ({ children }) => {
  // const [browserIsDark,_] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  // console.log('browserIsDark',browserIsDark)
  // useEffect(() => { 
  //   console.log('browserIsDark:useEffect',browserIsDark)
  // },[browserIsDark])
  const [isDark, setIsDark] = useState(() => {
    const storageTheme = localStorage.getItem('theme'); // 사용자가 설정한 값 가져오기
    console.log('storageTheme',storageTheme)
    return storageTheme === 'dark'
  })
  useEffect(() => { 
    console.log('isDark', isDark)
    document.body.classList.toggle("theme-dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark])
  return (
    <ColorSchemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
