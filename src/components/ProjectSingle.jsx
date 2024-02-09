import { Badge } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel'


export default function ProjectSingle() {

  useEffect(() => {
    // stops page loading in halfway down the page, returns user to top. 
    window.scrollTo(0, 0)
  },[])

  // eslint-disable-next-line no-unused-vars
  const [projectInformation, setProjectInformation] = useState(getInitialProjectData())

  function getInitialProjectData() {
    const localItem = localStorage.getItem('project-ID')
    const localProjectData = JSON.parse(localItem)
    return localProjectData
  }

  useEffect(() => {
    const localItem = JSON.stringify(projectInformation)
    localStorage.setItem('project-ID', localItem)
  }, [projectInformation])


  const { projectImages, title, groupType, year, time, description, liveLink, readme, languages } = projectInformation

  const [lgShow, setLgShow] = useState(false);
  const prevIcon = <svg id='prevIcon' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg>
  const nextIcon = <svg id='nextIcon' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg> 

  return (
    <section className='single-project-page'>
      <section className='single-project-img-section'>
        {projectImages.map((projectImage) => {
          return (
            <div className='single-project-img' onClick={() => setLgShow(true)} key={title+projectImage} style={{ backgroundImage: `url(${projectImage})` }}></div>
          )
        })}
      </section>
      <section className='project-info-container'>
        <h2>{title}</h2>
        <div className='project-info-time-group'>
          <p>{year}</p>
          <p>{groupType}</p>
          <p>{time}</p>
        </div>
        <p>{description}</p>
        <div className='social-links-container'>
          {/* ReadMe - GitHub */}
          <a className='social-icons' href={readme} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="social-img bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          {/* Site Link */}
          {liveLink !== '' ?
            <a className='social-icons' href={liveLink} target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="social-img bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </a>
            :
            ''
          }
        </div>
        <div className='skills-badge-container'>
          {languages.map((language) => {
            return (
              <Badge key={title+language} className='skills-badge'>{language}</Badge>
            )
          })}
        </div>
      </section>
      <Modal data-bs-theme="dark" show={lgShow} onHide={() => setLgShow(false)} centered>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          <Carousel touch={true} wrap={true} className='modal-carousel' prevIcon={prevIcon} nextIcon={nextIcon}>
            {projectImages.map((projectImage) => {
              return (
                <Carousel.Item key={'carousel'+title+projectImage}>
                  <div className='modal-carousel-img' style={{ backgroundImage: `url(${projectImage})` }}></div>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  )
}