import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'

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