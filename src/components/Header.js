import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Heart, ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="text-white" href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/gJ3pfjQf/Shopping-Logo-Graphics-6540272-1-580x386-removebg-preview.png"
                width="100"
                height="60"
                className="d-inline-block align-center"
              />{" "}
              <b className="fs-2">Shopy.com</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="#home">
                Link
              </Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2" />
                </Col>
                <Col xs="auto">
                  <Button className="btn btn-warning" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Link to={"/wishlist"}>
              <Nav.Link className="text-warning text-center me-5" href="#link">
                <Heart size={30}></Heart>
              </Nav.Link>
            </Link>
            <Link>
              <Nav.Link
                className="text-warning text-center mt-3 me-5"
                href="#home"
              >
                <p>
                  <ShoppingCart size={34}></ShoppingCart>
                  <span className="ms-1 text-warning "></span>
                </p>
              </Nav.Link>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header
