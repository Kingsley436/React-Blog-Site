import React, { useState } from 'react';
import { Row, Col, Button, Badge } from 'react-bootstrap';
import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogData';

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = ['All', 'Technology', 'Design', 'Travel', 'Food', 'Lifestyle'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <section className="blog-section #blog">
      <div className="section-header text-center mb-5">
        <h1 className="text-center">Latest <span className="gradient-text"> Blog Posts</span></h1>
        <p className="section-description">
          Discover our latest articles and stories from amazing writers
        </p>
      </div>

      <div className="category-filter mb-4">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              pill
              className={`category-badge ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <Row className="g-4">
        {displayedPosts.map(post => (
          <Col key={post.id} lg={4} md={6}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Row>

      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-5">
          <Button className="btn-primary-custom" onClick={loadMorePosts}>
            Load More Posts
          </Button>
        </div>
      )}
    </section>
  );
}

export default BlogList;