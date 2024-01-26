import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavMenu from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  const [getProject, setGetProject] = useState({})

  return (
    <>
      <NavMenu />
      <Outlet context={[getProject, setGetProject]}/>
      <Footer />
    </>
  )
}

export default App
