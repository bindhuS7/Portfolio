import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Box } from '@mui/material'

const App=()=>{

  return (
 <Router>
 
  <Routes>

    <Route path='/home' element={<Home/>}/>
   
  </Routes>
</Router> 


  )
}
export default App