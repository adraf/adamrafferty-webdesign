import { Outlet } from 'react-router-dom'
import NavMenu from './components/Nav.jsx'
import { useState } from 'react'

function App() {

  const [getProject, setGetProject] = useState([])

  return (
    <>
      <NavMenu />
      <Outlet context={[getProject, setGetProject]}/>
    </>
  )
}

export default App
