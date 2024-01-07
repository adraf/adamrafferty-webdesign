import { Outlet } from 'react-router-dom'
import NavMenu from './components/Nav.jsx'

function App() {

  return (
    <>
      <NavMenu />
      {/* <h1>Hello!</h1> */}
      <Outlet />
    </>
  )
}

export default App
