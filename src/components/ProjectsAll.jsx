import { Link, useOutletContext } from 'react-router-dom'
import { projectsArray } from '../utils/loaders/projects'

import Carousel from 'react-bootstrap/Carousel'
import { Badge } from 'react-bootstrap'

export default function ProjectsAll() {

  const [getProject, setGetProject] = useOutletContext()

  async function getIndProject(id) {
    projectsArray.forEach(project => {
      if (id === project.id) {
        localStorage.setItem('project-ID', project.id)
        setGetProject(project)
        return getProject
      }
    })
  }

  return (
    <section className='main-projects'>
      <Carousel className='d-flex'>
        {projectsArray.map(project => {
          const { id:projectId, title, languages, projectImages } = project
          return (
            <Carousel.Item key={projectId} className='w-100 h-100 p-3 project-container-carousel' style={{ backgroundImage: `url(${projectImages[0]})` }}>
              <Link to={`/project/${projectId}/`} onClick={() => getIndProject(projectId)}>
                <div className='carousel-information'>
                  <Carousel.Caption className='d-flex flex-column align-items-start'>
                    <h2>{title}</h2>
                    <div className='skills-badge-container'>
                    {languages.map(language => {
                      return (
                        <Badge key={projectId+language} className='skills-badge'>{language}</Badge>
                      )
                    })}
                  </div>
                </Carousel.Caption>
                </div>
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  )
}