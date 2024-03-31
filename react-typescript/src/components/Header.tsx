import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <>
        {['xl'].map((expand) => (
          <Navbar key={expand} expand={expand} className='color'>
            <Container fluid>
              <Navbar.Brand href='#'>
                <img
                  className='logo'
                  src='https://bizweb.dktcdn.net/100/446/826/files/logo-nike-3.png?v=1656926601220'
                  alt=''
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <NavLink to='/' className='nav-link '>
                      Home
                    </NavLink>
                    <NavLink to='/login' className='nav-link'>
                      Login
                    </NavLink>
                    <NavLink to='/register' className='nav-link'>
                      Register
                    </NavLink>
                    <NavLink to='/admin' className='nav-link'>
                      Admin
                    </NavLink>
                  </Nav>
                  <Form className='d-flex'>
                    <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
                    <Button variant='outline-primary'>Search</Button>{' '}
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  )
}

export default Header
