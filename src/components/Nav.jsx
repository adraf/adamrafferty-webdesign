import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DarkMode from "./DarkMode";

export default function NavMenu() {
  return (
    <Navbar collapseOnSelect expand='md' className='bg-body-tertiary' id='navbar-main-page'>
      <Navbar.Brand><Link className='nav-btn-brand' to='/'>Adam Rafferty</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto' id='dropdown-nav'>
          <Container fluid='md'>
            <Row className='text-center align-items-center'>
              <Col>
                {/* Dark Mode Toggle Button */}
                <DarkMode />
              </Col>
              <Col><Nav><Link className='nav-btn-links' to='/project'>Projects</Link></Nav></Col>
              {/* <Col><Nav><Link className='nav-btn-links' to='/'>Work</Link></Nav></Col> */}
              <Col><Nav><Link className='nav-btn-links' to='/about'>About</Link></Nav></Col>
            </Row>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}