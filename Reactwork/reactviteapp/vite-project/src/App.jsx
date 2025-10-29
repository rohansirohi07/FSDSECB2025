import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profile from './component/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h2>welcome to react</h2>
      <h3 style={{backgroundColor:'cyan',color:'brown'}}>
       <profile/>
      </h3>
    </div>
  )
}

export default App
