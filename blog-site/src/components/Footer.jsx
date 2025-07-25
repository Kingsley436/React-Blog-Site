import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container fluid className="px-5">
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h5 className="brand-text">✨ Kingsley's Blog</h5>
              <p className="footer-description">
                Creating amazing content and connecting writers with readers 
                in a colorful and inspiring way.
              </p>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="footer-title">Categories</h6>
            <ul className="footer-links">
              <li><a href="#tech">Technology</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#travel">Travel</a></li>
              <li><a href="#lifestyle">Lifestyle</a></li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h6 className="footer-title">Connect With Us</h6>
            <div className="social-links">
              <a href="#" className="social-link twitter">
                <BsTwitter />
              </a>
              <a href="#" className="social-link instagram">
                <BsInstagram />
              </a>
              <a href="https://github.com/Kingsley436?tab=repositories" className="social-link github">
                <BsGithub />
              </a>
              <a href="#" className="social-link linkedin">
                <BsLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="footer-copyright fw-bold">
              © 2025 KINGSLEY QUARSHIE
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-links-inline">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;