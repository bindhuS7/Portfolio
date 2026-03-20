
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import Trail from './Trail'

const App=()=>{

  return (
 <Router>
 
  <Routes>
 <Route path="/" element={<Home />} />
    <Route path='/home' element={<Home/>}/>
    {/* <Route path='/trail' element={<Trail/>}/> */}

   
  </Routes>
</Router> 


  )
}
export default App