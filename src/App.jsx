import { useState } from 'react'
import './App.css'
import Home from './components/home/home.jsx'
import Navbar from './components/navbar/navbar.jsx'
import About from './components/about/about.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Navbar/>
      <About/>
    </>
  )
}

export default App
