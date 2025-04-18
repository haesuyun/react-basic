import React, { createContext, useState, useEffect } from "react";
export const ColorSchemeContext = createContext();
export const ColorSchemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const storageTheme = localStorage.getItem('theme'); // 사용자가 설정한 값 가져오기
    return storageTheme === 'dark'
  })
  useEffect(() => { 
    document.body.classList.toggle("theme-dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark])
  return (
    <ColorSchemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
