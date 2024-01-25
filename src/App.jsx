import { Outlet } from 'react-router-dom'
import NavMenu from './components/Nav.jsx'
import { useState } from 'react'

function App() {

  // localStorage.setItem('project-ID', project.id)
  // useEffect(() => {
  //   async function handleProjectID() {
  //     Number(localStorage.getItem('project-ID')) !== getProject.id && setGetProject(getProject)

  //     return getProject
  //   }
  //   handleProjectID()
  // }, [localStorage])

  const [getProject, setGetProject] = useState()

  return (
    <>
      <NavMenu />
      <Outlet context={[getProject, setGetProject]}/>
    </>
  )
}

export default App
