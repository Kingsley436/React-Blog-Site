import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, InputGroup } from 'react-bootstrap';
import { BsArrowLeft, BsCalendar, BsEye, BsHeart, BsShare, BsSearch, BsClock, BsTag } from 'react-icons/bs';
import { useTheme } from '../App';
import { blogPosts } from '../data/blogData';

function BlogPage() {
  const { navigateToPage } = useTheme();
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Design', 'Travel', 'Food', 'Lifestyle'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const relatedPosts = blogPosts
    .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
    .slice(0, 3);

  return (
    <div className="blog-page pt-5">
      <Container fluid className="pt-4">
        {/* Header Section */}
        <div className="blog-page-header px-5">
          <Container fluid>
            <Row className="align-items-center py-5">
              <Col>
                <Button 
                  variant="outline-primary" 
                  className="back-btn mb-3"
                  onClick={() => navigateToPage('home')}
                >
                  <BsArrowLeft className="me-2" />
                  Back to Home
                </Button>
                <h1 className="blog-page-title">
                  Explore Our <span className="gradient-text">Blog</span>
                </h1>
                <p className="blog-page-description">
                  Discover amazing stories, insights, and knowledge from our community of writers
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <Container fluid className='px-5'>
          <Row className="g-4">
            {/* Main Content */}
            <Col lg={8}>
              {/* Featured Article */}
              <Card className="featured-article-card mb-4">
                <div className="featured-image-container">
                  <Card.Img variant="top" src={selectedPost.image} className="featured-image" />
                  <Badge className={`category-badge-featured ${selectedPost.category.toLowerCase()}`}>
                    {selectedPost.category}
                  </Badge>
                </div>
                
                <Card.Body className="p-4">
                  <div className="article-meta mb-3">
                    <span className="meta-item">
                      <BsCalendar className="me-1" />
                      {selectedPost.date}
                    </span>
                    <span className="meta-item">
                      <BsEye className="me-1" />
                      {selectedPost.views} views
                    </span>
                    <span className="meta-item">
                      <BsClock className="me-1" />
                      5 min read
                    </span>
                  </div>
                  
                  <h2 className="article-title">{selectedPost.title}</h2>
                  <p className="article-excerpt">{selectedPost.excerpt}</p>
                  
                  <div className="article-content mb-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4>Key Takeaways</h4>
                    <ul>
                      <li>Understanding the latest trends in {selectedPost.category.toLowerCase()}</li>
                      <li>Practical tips and actionable insights</li>
                      <li>Real-world examples and case studies</li>
                      <li>Future predictions and recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="article-footer">
                    <div className="author-section">
                      <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="author-avatar-large" />
                      <div className="author-info-large">
                        <h6 className="author-name-large">{selectedPost.author.name}</h6>
                        <p className="author-role-large">{selectedPost.author.role}</p>
                        <p className="author-bio">
                          Passionate writer and expert in {selectedPost.category.toLowerCase()} with years of experience 
                          sharing knowledge and insights with the community.
                        </p>
                      </div>
                    </div>
                    
                    <div className="article-actions">
                      <Button variant="outline-primary" className="action-button">
                        <BsHeart className="me-2" />
                        Like (24)
                      </Button>
                      <Button variant="outline-secondary" className="action-button">
                        <BsShare className="me-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="related-articles">
                  <h4 className="section-title mb-4">Related Articles</h4>
                  <Row className="g-3">
                    {relatedPosts.map(post => (
                      <Col md={4} key={post.id}>
                        <Card 
                          className="related-article-card h-100"
                          onClick={() => setSelectedPost(post)}
                          style={{ cursor: 'pointer' }}
                        >
                          <Card.Img variant="top" src={post.image} className="related-image" />
                          <Card.Body className="p-3">
                            <Badge className={`category-badge-small ${post.category.toLowerCase()}`}>
                              {post.category}
                            </Badge>
                            <Card.Title className="related-title">{post.title}</Card.Title>
                            <div className="related-meta">
                              <small className="text-muted">{post.date}</small>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="blog-sidebar">
                {/* Search */}
                <Card className="sidebar-card mb-4">
                  <Card.Body>
                    <h5 className="sidebar-title">Search Articles</h5>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Search for articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                      <Button variant="outline-secondary">
                        <BsSearch />
                      </Button>
                    </InputGroup>
                  </Card.Body>
                </Card>

                {/* Categories */}
                <Card className="sidebar-card mb-4">
                  <Card.Body>
                    <h5 className="sidebar-title">Categories</h5>
                    <div className="category-list">
                      {categories.map(category => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "primary" : "outline-secondary"}
                          size="sm"
                          className="category-btn mb-2 w-100"
                          onClick={() => setSelectedCategory(category)}
                        >
                          <BsTag className="me-2" />
                          {category}
                        </Button>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Recent Posts */}
                <Card className="sidebar-card mb-4">
                  <Card.Body>
                    <h5 className="sidebar-title">Recent Posts</h5>
                    <div className="recent-posts">
                      {filteredPosts.slice(0, 5).map(post => (
                        <div 
                          key={post.id} 
                          className="recent-post-item"
                          onClick={() => setSelectedPost(post)}
                          style={{ cursor: 'pointer' }}
                        >
                          <img src={post.image} alt={post.title} className="recent-post-image" />
                          <div className="recent-post-content">
                            <h6 className="recent-post-title">{post.title}</h6>
                            <small className="recent-post-date">{post.date}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Newsletter */}
                <Card className="sidebar-card newsletter-card">
                  <Card.Body className="text-center">
                    <h5 className="newsletter-title">Stay Updated</h5>
                    <p className="newsletter-description">
                      Subscribe to our newsletter and never miss our latest articles!
                    </p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="newsletter-input"
                        />
                      </Form.Group>
                      <Button className="btn-primary-custom w-100">
                        Subscribe Now
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default BlogPage;