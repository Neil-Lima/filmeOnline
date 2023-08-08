import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, InputGroup, FormControl, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Nav_filme: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
            <FontAwesomeIcon icon={faVideo} style={{ fontSize: "19px" }} />
          </span>
        </Navbar.Brand>
        <InputGroup style={{ width: "324px" }}>
          <FormControl type="text" placeholder="Pesquisar..." />
          <Button variant="primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
        <Navbar.Toggle aria-controls="navcol-5">
          <span className="visually-hidden">Toggle navigation</span>
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navcol-5">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="nav-link active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">Series</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">Animes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">Filmes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_filme;
