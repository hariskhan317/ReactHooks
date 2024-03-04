import React from 'react'
// we can use this themecontext with so,
// import { themeContext } from '../App'
// we will import useTHeme and useUpdateTheme from  themeContextProvider file to access the value
import { useTheme, useUpdateTheme} from '../hooks/themeContextProvider'

function ThemeToggle() {
    const theme = useTheme();
    const toggleTheme = useUpdateTheme();
    const themeStyle = {
        backgroundColor: theme ? '#333' : '#ccc',
        color: theme ? '#ccc' : '#333',
        padding: '20px',
    }
  return (
      <div>
          <div style={themeStyle}>theme {theme}</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle
