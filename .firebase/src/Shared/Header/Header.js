import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../img/logo1.png";

import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar className="header-nav bg-white" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="header-name">
        <img className="" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end header">
        <Nav.Link className="" as={HashLink} to="/home">
          Home
        </Nav.Link>

        <Nav.Link className="" as={HashLink} to="/dashboard/review">
          Review
        </Nav.Link>

        <Nav.Link className="" as={HashLink} to="/aboutUs">
          About Us
        </Nav.Link>

        <Nav.Link className="" as={HashLink} to="/home#contactUs">
          Contact
        </Nav.Link>

        <Nav.Link className="" as={HashLink} to="/home#products">
          Products
        </Nav.Link>

        <Nav.Link className="" as={HashLink} to="/home#blogs">
          Blogs
        </Nav.Link>
        {user?.email ? <>

          <Nav.Link className="" as={HashLink} to="/dashboard">
          Dashboard
        </Nav.Link>
        <button className="logout-btn" onClick={logOut}>Logout</button>
        </> : <Nav.Link className="" as={HashLink} to="/login">
        Login
        </Nav.Link>}
        <span className="ps-2">{user?.displayName}</span>

        
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
