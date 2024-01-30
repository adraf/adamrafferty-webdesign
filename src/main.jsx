import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/main.scss'

//Page Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ProjectsAll from './components/ProjectsAll.jsx'
import ProjectSingle from './components/ProjectSingle.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/project',
        element: <ProjectsAll />
      },
      {
        path: '/project/:id',
        element: <ProjectSingle />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)