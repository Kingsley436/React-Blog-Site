import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight, BsStars } from 'react-icons/bs';

function Hero() {
  return (
    <section className="hero-section">
      <Container fluid className="px-5">
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div className="hero-content">
              <div className="hero-badge">
                <BsStars className="me-2" />
                Welcome to Kingsley's Blog
              </div>
              <h1 className="hero-title">
                Discover Amazing 
                <span className="gradient-text"> Stories</span>
              </h1>
              <p className="hero-description">
                Dive into a world of colorful content, inspiring stories, and amazing insights. 
                Join our community of writers and readers who love to share and explore.
              </p>
              <div className="hero-buttons">
                <Button className="btn-primary-custom me-3">
                  Start Reading
                  <BsArrowRight className="ms-2" />
                </Button>
                <Button variant="outline-light" className="btn-outline-custom">
                  Write a Story
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon">📚</div>
                  <h6>Latest Stories</h6>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon">🎨</div>
                  <h6>Creative Content</h6>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon">⭐</div>
                  <h6>Top Rated</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;