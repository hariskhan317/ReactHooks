import React, { useContext, useState } from 'react';

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();


// Using custom hooks to access the value of useTheme and useUpdateTheme value in the child component 
export function useTheme() {
  return useContext(themeContext);
}

export function useUpdateTheme() {
  return useContext(themeUpdateContext);
}

export function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState(true);

    const handleTheme = () => {
      setTheme(prevTheme => !prevTheme)
    }
  
  return (
    <themeContext.Provider value={theme}>
      <themeUpdateContext.Provider value={handleTheme}>
      {children}
      </themeUpdateContext.Provider>
    </themeContext.Provider>
  );
  
}