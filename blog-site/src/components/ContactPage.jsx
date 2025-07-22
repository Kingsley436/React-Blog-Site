import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { BsEnvelope, BsPhone, BsGeoAlt, BsSend, BsCheckCircle, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowAlert(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <BsEnvelope />,
      title: 'Email Us',
      info: 'qkingsley436@gmail.com',
    },
    {
      icon: <BsPhone />,
      title: 'Call Us',
      info: '+233 55 727 2031',
    },
    {
      icon: <BsGeoAlt />,
      title: 'Visit Us',
      info: '123 Blog Street, Accra - Ghana',
    }
  ];

  const socialLinks = [
    { icon: <BsTwitter />, name: 'Twitter', url: '#', color: 'twitter' },
    { icon: <BsInstagram />, name: 'Instagram', url: '#', color: 'instagram' },
    { icon: <BsGithub />, name: 'GitHub', url: 'https://github.com/Kingsley436?tab=repositories', color: 'github' },
    { icon: <BsLinkedin />, name: 'LinkedIn', url: '#', color: 'linkedin' }
  ];

  return (
    <div className="contact-page">
      <Container fluid className="py-5 px-5">
        {/* Header Section */}
        <div className="contact-header text-center mb-5">
          <h1 className="contact-title pt-5">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-description pb-3">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Alert for successful submission */}
        {showAlert && (
          <Alert variant="success" className="success-alert mb-4">
            <BsCheckCircle className="me-2" />
            Thank you for your message! We'll get back to you soon.
          </Alert>
        )}

        <Row className="g-5">
          {/* Contact Form */}
          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <h3 className="form-title mb-4">Send us a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="custom-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="custom-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit" 
                    className="btn-primary-custom w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <BsSend className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info Sidebar */}
          <Col lg={4}>
            <div className="contact-sidebar">
              {/* Contact Information */}
              <div className="contact-info-section mb-4">
                <h4 className="sidebar-title mb-4">Contact Information</h4>
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h6 className="contact-item-title">{item.title}</h6>
                      <p className="contact-item-info">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h4 className="sidebar-title mb-4">Follow Us</h4>
                <div className="social-links-contact">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`social-link-contact ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="social-description">
                  Stay connected with us on social media for the latest updates and behind-the-scenes content.
                </p>
              </div>

              {/* Quick Response Card */}
              <Card className="response-card">
                <Card.Body className="text-center">
                  <div className="response-icon mb-3">
                    <BsCheckCircle />
                  </div>
                  <h6 className="response-title">Quick Response</h6>
                  <p className="response-text">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;