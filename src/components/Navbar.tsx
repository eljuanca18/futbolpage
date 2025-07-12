"use client";
import Link from "next/link";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" className="navbar-brand">FutbolStats</Link>
        <Nav className="me-auto">
          <Link href="/equipos" className="nav-link">Equipos</Link>
          <Link href="/jugadores" className="nav-link">Jugadores</Link>
          <Link href="/buscar" className="nav-link">Buscar</Link>
        </Nav>
      </Container>
    </BsNavbar>
  );
}