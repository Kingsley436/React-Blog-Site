import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSun, BsMoon, BsSearch, BsHeart } from 'react-icons/bs';
import { useTheme } from '../App';

function Header() {
  const { isDarkMode, toggleTheme, currentPage, navigateToPage } = useTheme();

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-logo" onClick={() => navigateToPage('home')}>
          <span className="brand-text">✨ Kingsley's Blog</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#home" 
              className={`nav-link-custom ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => navigateToPage('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#blog" 
              className={`nav-link-custom ${currentPage === 'blog' ? 'active' : ''}`}
              onClick={() => navigateToPage('blog')}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={`nav-link-custom ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => navigateToPage('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={`nav-link-custom ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => navigateToPage('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
          
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#search" className="icon-link">
              <BsSearch />
            </Nav.Link>
            <Nav.Link href="#favorites" className="icon-link">
              <BsHeart />
            </Nav.Link>
            <div className="theme-switcher" onClick={toggleTheme}>
              <div className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="theme-icon">
                  {isDarkMode ? <BsMoon /> : <BsSun />}
                </div>
                <div className="glow-effect"></div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;