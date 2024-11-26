import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      <Navbar key="md" expand="md" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={"offcanvasNavbarLabel-expand-md"}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Aboutk</Nav.Link>
                <Nav.Link href="#action2">Services</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
