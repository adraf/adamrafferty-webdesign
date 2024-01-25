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

  const prevIcon = <svg id='prevIcon' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg>
  const nextIcon = <svg id='nextIcon' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>

  return (
    <>
      <section className='main-projects'>
        <Carousel className='d-flex' prevIcon={prevIcon} nextIcon={nextIcon}>
          {projectsArray.map(project => {
            const { id:projectId, title, languages, projectImages } = project
            return (
              <Carousel.Item key={projectId} className='w-100 h-100 p-3 project-container-carousel'  xl={3} md={6} style={{ backgroundImage: `url(${projectImages[0]})` }}>
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
      <section className='main-projects-mobile'>
        {projectsArray.map(project => {
          const { id:projectId, title, languages, projectImages } = project
          return (
            <Link className='mobile-project-sections' to={`/project/${projectId}/`} onClick={() => getIndProject(projectId)} key={projectId}>
              <section  className='project-container-carousel' style={{ backgroundImage: `url(${projectImages[0]})` }}>
              </section>
                <div className='carousel-information'>
                  <div className='d-flex flex-column align-items-start'>
                    <h2>{title}</h2>
                    <div className='skills-badge-container'>
                      {languages.map(language => {
                        return (
                          <Badge key={projectId+language} className='skills-badge'>{language}</Badge>
                        )
                      })}
                    </div>
                  </div>
                </div>
        
            </Link>
          )
        })}
      </section>
    </>
  )
}