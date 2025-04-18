import React, { createContext, useState, useEffect } from "react";
export const ColorSchemeContext = createContext();
export const ColorSchemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => { 
    document.body.classList?.remove('theme-dark')
    if(isDark) document.body.classList.add('theme-dark')
  }, [isDark])
  return (
    <ColorSchemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
