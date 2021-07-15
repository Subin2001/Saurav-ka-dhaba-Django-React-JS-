import {Nav, Navbar, Container,Dropdown,NavItem,NavLink,Button } from 'react-bootstrap'

import React from 'react'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className='me-5' href="#home">Saurav Ka Dhaba</Navbar.Brand>
            <Nav className="ml-auto"> 
            <Dropdown as={NavItem} className='me-2' >
            <Dropdown.Toggle as={NavLink}>Categories</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>North Indian</Dropdown.Item>
                <Dropdown.Item>South Indian</Dropdown.Item>
                <Dropdown.Item>Western</Dropdown.Item>
                <Dropdown.Item>Sweets</Dropdown.Item>
                <Dropdown.Item>Junk Foods</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Nav.Link className='me-2' href="#offers">Offers</Nav.Link>
            <Nav.Link className='me-2' href="#Menu">Menu</Nav.Link>
            <Button className='ml-auto' variant="success">Order Now</Button>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
