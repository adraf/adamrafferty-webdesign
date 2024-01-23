import { projectsArray } from "../utils/loaders/projects"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function ProjectsAll() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);  
  }

  return (
    <section className="main-projects">
      {projectsArray.map(project => {
        const { id, title, description } = project
        return (
          <section key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
          </section>
        )
      })}
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}