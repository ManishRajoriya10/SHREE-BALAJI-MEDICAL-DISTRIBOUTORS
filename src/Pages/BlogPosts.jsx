import React from "react";
import "../App.css";
import SeasonalFlu from '../assets/Blog Img/Seasonal Flu.jpg';
import MedicinesMatters from '../assets/Blog Img/Medicines Matters.jpg';
import MedicalDevices from '../assets/Blog Img/medical devices.jpg'

const blogPosts = [
  {
    id: 1,
    image: SeasonalFlu,
    title: "Top 5 Medicines for Seasonal Flu",
    description:
      "Discover the most recommended medicines to manage symptoms of seasonal flu effectively and safely.",
  },
  {
    id: 2,
    image:  MedicinesMatters ,
    title: "Why Proper Storage of Medicines Matters",
    description:
      "Learn why correct temperature and storage conditions are crucial for maintaining medicine quality.",
  },
  {
    id: 3,
    image: MedicalDevices,
    title: "Latest Medical Devices in 2025",
    description:
      "Explore the new and innovative medical devices transforming patient care this year.",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Health Awareness & Tips</h2>
        <p className="blog-subtitle">
          Stay informed with the latest updates, tips, and guides on medicines, medical devices, and healthcare.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-heading">{post.title}</h3>
                <p className="blog-text">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
