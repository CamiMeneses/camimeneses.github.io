import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./mynavbar.style.scss";

const MyNavbar = () => {
  return (
    <div className='cursive'>
      <Navbar fixed="top" collapseOnSelect expand="md" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#welcome">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT ME</Nav.Link>
            <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link href="#education">EDUCATION</Nav.Link>
            <Nav.Link href="#skills">SKILLS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MyNavbar
