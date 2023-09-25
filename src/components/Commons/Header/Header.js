import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css';
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth)
    navigate('/')
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            FashionMania
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/">
                <small>Home</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <small>About</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <small>Shop</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <small>Pages</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <small>Blog</small>
              </Nav.Link>
            </Nav>
            <Nav className="ms-4 fw-bold">
              {user ? (
                <>
                  <Nav.Link className="fs-5">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </Nav.Link>
                  
                  <NavDropdown className="fs-5 nav-fonts" title={<FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>}id="basic-nav-dropdown">
                    <NavDropdown.Item className='nav-drop-fonts'>
                      {user.displayName ? user.displayName : "My Profile"}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                     className='nav-drop-fonts' 
                     >
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className='nav-drop-fonts'
                    onClick={handleSignOut}
                    >
                      Sign Out
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                  <Nav.Link className="fs-5">
                    <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">
                    <small>Sign In</small>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <small>Sign Up</small>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
