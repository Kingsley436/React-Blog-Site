import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { BsHeart, BsShare, BsEye, BsCalendar } from 'react-icons/bs';

function BlogCard({ post }) {
  return (
    <Card className="blog-card h-100">
      <div className="card-image-container">
        <Card.Img variant="top" src={post.image} className="card-image" />
        <div className="card-overlay">
          <div className="card-actions">
            <Button variant="light" size="sm" className="action-btn">
              <BsHeart />
            </Button>
            <Button variant="light" size="sm" className="action-btn">
              <BsShare />
            </Button>
          </div>
        </div>
        <Badge className={`category-badge-card ${post.category.toLowerCase()}`}>
          {post.category}
        </Badge>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <div className="card-meta mb-2">
          <small className="text-muted">
            <BsCalendar className="me-1" />
            {post.date}
          </small>
          <small className="text-muted ms-3">
            <BsEye className="me-1" />
            {post.views} views
          </small>
        </div>
        
        <Card.Title className="card-title">{post.title}</Card.Title>
        <Card.Text className="card-excerpt">{post.excerpt}</Card.Text>
        
        <div className="mt-auto">
          <div className="author-info mb-3">
            <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
            <div className="author-details">
              <div className="author-name">{post.author.name}</div>
              <div className="author-role">{post.author.role}</div>
            </div>
          </div>
          
          <Button className="btn-primary-custom w-100">
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;