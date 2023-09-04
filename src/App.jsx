

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
function App() {

  return (

    <>
    <BrowserRouter>
    <Navbar />
 
    
   <Routes>
      <Route path='/navbar' element={<Navbar /> }  />  
      <Route path='/home' element={<Home /> }  />  
    </Routes>
    
    
    </BrowserRouter>

      <div>
    
      </div>
     
    </>
  )
}

export default App
