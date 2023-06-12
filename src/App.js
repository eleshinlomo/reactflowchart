import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Button, Container} from '@mui/material'
import Home from './Pages.js/Home'

const App = () => {
  return (
    <div>

    
      <Routes>

       <Route exact path="/" element={<Home />} />
       
      </Routes>
    

    </div>
    
  )
}

export default App