import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Blog not found</h2>
        <Link to="/blogs">Go Back</Link>
      </div>
    );
  }

  return (
    <section className="blog-detail-section">
      <div className="blog-detail-container">
        <img src={post.image} alt={post.title} className="blog-detail-image" />
        <h1 className="blog-detail-title">{post.title}</h1>
        <p className="blog-detail-text">{post.fullText}</p>
        <Link to="/" className="blog-btn">← Back to Home</Link>
      </div>
    </section>
  );
};

export default BlogDetails;
