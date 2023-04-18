import React from 'react'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'

const App = () => {
  const [darktheme,setDarkTheme] = useState(false)
  return (
    <div className={darktheme?'':'dark'}>
      <div className='bg-yellow-400 dark:bg-red-400'>Heading1</div>
      <Navbar></Navbar>
      <Footer></Footer>
      <Routes></Routes>
    </div>
  )
}

export default App