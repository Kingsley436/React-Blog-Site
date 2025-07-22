import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram, BsDownload, BsHeart, BsCode, BsPencil, BsCamera, BsGlobe } from 'react-icons/bs';

function AboutPage() {
  const skills = [
    { name: 'React', level: 90, color: 'primary' },
    { name: 'JavaScript', level: 95, color: 'warning' },
    { name: 'Laravel', level: 85, color: 'success' },
    { name: 'Python', level: 80, color: 'info' },
    { name: 'Graphic Design', level: 92, color: 'danger' },
    { name: 'Content Writing', level: 88, color: 'secondary' }
  ];

  const achievements = [
    { number: '50+', label: 'Blog Posts', icon: <BsPencil /> },
    { number: '10K+', label: 'Readers', icon: <BsHeart /> },
    { number: '25+', label: 'Projects', icon: <BsCode /> },
    { number: '3+', label: 'Years Experience', icon: <BsGlobe /> }
  ];

  const interests = [
    'Web Development', 'Content Writing', 'Photography', 'Travel',  
    'Graphic Design', 'Open Source', 'UI/UX Design', 'Research'
  ];

  return (
    <div className="about-page">
      <Container fluid className="py-5">
        {/* Header Section */}
        <div className="about-header text-center mb-5">
          <h1 className="about-title">
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        <Row className="g-5">
          {/* Profile Section */}
          <Col lg={4}>
            <Card className="profile-card text-center">
              <Card.Body className="p-4">
                <div className="profile-image-container mb-4">
                  <img 
                    src="../src/assets/profilePhoto.jpg"
                    alt="Kingsley Quarshie" 
                    className="profile-image"
                  />
                  <div className="profile-status">
                    <div className="status-dot"></div>
                    <span>Available for projects</span>
                  </div>
                </div>
                
                <h3 className="profile-name">Kingsley Quarshie</h3>
                <p className="profile-title">Full Stack Developer & Tech Blogger</p>
                <p className="profile-location">📍 Accra, Ghana</p>
                
                <div className="profile-social mb-4">
                  <a href="https://github.com/Kingsley436?tab=repositories" className="social-btn github">
                    <BsGithub />
                  </a>
                  <a href="#" className="social-btn twitter">
                    <BsTwitter />
                  </a>
                  <a href="#" className="social-btn linkedin">
                    <BsLinkedin />
                  </a>
                  <a href="#" className="social-btn instagram">
                    <BsInstagram />
                  </a>
                </div>
              

                <div className="contact-info">
                  <p className="contact-item">
                    <strong>Email:</strong> qkingsley436@gmail.com
                  </p>
                  <p className="contact-item">
                    <strong>Phone:</strong> +233 55 727 2031
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Main Content */}
          <Col lg={8}>
            {/* Bio Section */}
            <Card className="content-card mb-4">
              <Card.Body className="p-4">
                <h4 className="section-title mb-3">
                  My Story
                </h4>
                <p className="bio-text">
                  Hello! I'm <strong>Kingsley Quarshie</strong>, a passionate <strong>full-stack developer and tech blogger </strong> 
                  based in Ghana. I love creating beautiful, functional web applications and sharing my knowledge 
                  through engaging blog posts.
                </p>
                <p className="bio-text">
                  With over 3 years of experience in web development, I specialize in React, Laravel, and modern 
                  web technologies. When I'm not coding, you'll find me writing about the latest tech trends, 
                  exploring new frameworks, or capturing moments through photography.
                </p>
                <p className="bio-text">
                  I believe in the power of technology to solve real-world problems and am always excited to 
                  work on projects that make a positive impact. Through Kingsley's Blog, I aim to share knowledge, 
                  inspire fellow developers, and build a community of tech enthusiasts.
                </p>
              </Card.Body>
            </Card>

            {/* Skills Section */}
            <Card className="content-card mb-4">
              <Card.Body className="p-4">
                <h4 className="section-title mb-4">
                  <BsCode className="me-2 text-primary" />
                  Skills & Expertise
                </h4>
                <Row>
                  {skills.map((skill, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className={`skill-progress bg-${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Achievements Section */}
            <Card className="content-card mb-4">
              <Card.Body className="p-4">
                <h4 className="section-title mb-4">
                  <BsGlobe className="me-2 text-success" />
                  Achievements
                </h4>
                <Row>
                  {achievements.map((achievement, index) => (
                    <Col md={3} sm={6} key={index} className="mb-3">
                      <div className="achievement-item text-center">
                        <div className="achievement-icon">
                          {achievement.icon}
                        </div>
                        <h5 className="achievement-number">{achievement.number}</h5>
                        <p className="achievement-label">{achievement.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Interests Section */}
            <Card className="content-card">
              <Card.Body className="p-4">
                <h4 className="section-title mb-3">
                  <BsCamera className="me-2 text-warning" />
                  Interests & Hobbies
                </h4>
                <div className="interests-container">
                  {interests.map((interest, index) => (
                    <Badge key={index} className="interest-badge me-2 mb-2">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="interests-description mt-3">
                  Beyond coding, I'm passionate about photography, traveling to new places, and contributing 
                  to open-source projects. I also enjoy learning about emerging technologies like AI and 
                  machine learning, and I'm always looking for ways to incorporate them into my projects.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="cta-section text-center mt-5">
          <Card className="cta-card">
            <Card.Body className="p-5">
              <h3 className="cta-title">Let's Work Together!</h3>
              <p className="cta-description">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              </p>
              <div className="cta-buttons">
                <Button className="btn-primary-custom me-3">
                  Get In Touch
                </Button>
                <Button variant="outline-primary" className="btn-outline-custom">
                  View My Work
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default AboutPage;