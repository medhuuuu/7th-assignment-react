import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
                <Image src="https://elearningsolved.com/resources/img/logos/logo.png" style={{height: "50px"}}/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="../Card/Card.js">Courses</Nav.Link>
                <Nav.Link href="../Cart/Cart.js">Order Review</Nav.Link>
                <Nav.Link href="/sign-in"><Button variant="warning">Sign-in <FontAwesomeIcon icon={faArrowUp} /></Button></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search Courses" className="mr-sm-2" />
                <Button variant="warning">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Menu;