"use client";

import Link from "next/link";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "./AuthProvider";

export default function Navbar() {
  const { session, logout } = useAuth();

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" className="navbar-brand">FutbolPage</Link>
        <Nav className="me-auto">
          <Link href="/equipos" className="nav-link">Equipos</Link>
          <Link href="/jugadores" className="nav-link">Jugadores</Link>
          <Link href="/buscar" className="nav-link">Buscar</Link>
        </Nav>
        <Nav>
          {session ? (
            <>
              <span className="navbar-text text-white me-2">
                {session.user.email}
              </span>
              <button className="btn btn-sm btn-outline-light" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-sm btn-outline-light">Iniciar sesión</Link>
          )}
        </Nav>
      </Container>
    </BsNavbar>
  );
}
