import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
     <Nav
      
    >
      <Nav.Item>
      <Nav.Link><Link to="/"> Add</Link></Nav.Link>
      </Nav.Item>

      <Nav.Item>
      <Nav.Link><Link to="/view"> View</Link></Nav.Link>
      </Nav.Item>

      <Nav.Item>
      <Nav.Link><Link to="/signup"> SignUp</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link><Link to="/signin"> SignIn</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header