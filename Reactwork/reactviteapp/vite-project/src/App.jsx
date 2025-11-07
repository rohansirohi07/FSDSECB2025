import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profile from './component/Profile'
import Gallery from './component/Gallery'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/imagemanipulation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/pages/Login'

function App() {
 

  return (
    <div className='container'>
      {/* <h2>Welcome to ReactVite.</h2> */}

       {/* <Gallery />  */}

      {/* <StateHandling /> */}
       {/* <ImageManipulation/> */}
       <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
