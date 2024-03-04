import React from 'react';
import ThemeToggle from './components/themeToggle'
import { ThemeProvider } from './hooks/themeContextProvider';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

export default App;
