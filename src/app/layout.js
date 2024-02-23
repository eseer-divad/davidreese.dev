import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/globals.css";
import index_styles from '../styles/index.module.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand as="a">Home</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/blog" passHref>
                <Nav.Link as="a">Blog</Nav.Link> {/* Wrap Nav.Link in Link */}
              </Link>
              {/* For external links, you can use Nav.Link directly */}
              <Nav.Link href="https://www.linkedin.com/in/david-reese-09b0a2236/" target="_blank">LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/eseer-divad/" target="_blank">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={inter.className}>{children}</div>
      <footer className={index_styles.footer}>
        <p className={index_styles.description}>
            This is a (React/Next/Bootstrap 5) portfolio website hosting the projects of David Reese.
        </p>
      </footer>
    </>
  );
}
