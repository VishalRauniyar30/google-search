import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routerer from './components/Routerer';
function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}  />
        <Routerer />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
