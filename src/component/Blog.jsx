// Blog.js
import React from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import '../component css/blog.css'

const blogPosts = [
  { id: 1, title: "Alwar Recipes", content: "Full post on Alwar recipes...", image: "https://via.placeholder.com/600", category: "Recipes" },
  { id: 2, title: "Alwar Spices", content: "A deep dive into Alwar's spices...", image: "https://via.placeholder.com/600", category: "Spices" },
  { id: 3, title: "Street Food", content: "Exploring street food in Alwar...", image: "https://via.placeholder.com/600", category: "Street Food" },
  { id: 4, title: "Traditional Sweets", content: "All about Alwar's sweets...", image: "https://via.placeholder.com/600", category: "Sweets" },
  // Additional posts for demonstration
];

const Blog = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
    <Footer />
  </>
);

const Header = () => (
  <header className="header">
    <h1>Alwar Food Blog</h1>
    <p>Experience the flavors and stories of Alwar.</p>
    <nav className="nav">
      <Link to="/" className="navLink">Home</Link>
      <Link to="/about" className="navLink">About</Link>
      <Link to="/contact" className="navLink">Contact</Link>
    </nav>
  </header>
);

const Home = () => (
  <div className="home">
    <Hero />
    <div className="mainContent">
      <BlogList />
      <Sidebar />
    </div>
  </div>
);

const Hero = () => (
  <section className="hero">
    <h2>Discover the Cuisine of Alwar</h2>
    <p>Join us on a journey through Alwar's rich food culture.</p>
  </section>
);

const BlogList = () => (
  <div className="blogList">
    {blogPosts.map(post => (
      <BlogCard key={post.id} post={post} />
    ))}
  </div>
);

const BlogCard = ({ post }) => (
  <div className="blogCard">
    <img src={post.image} alt={post.title} className="blogImage" />
    <div className="blogContent">
      <h3 className="blogTitle">{post.title}</h3>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post.id}`} className="readMore">Read More</Link>
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <CategoryWidget />
    <RecentPostsWidget />
  </aside>
);

const CategoryWidget = () => (
  <div className="widget">
    <h3>Categories</h3>
    <ul className="widgetList">
      {["Recipes", "Spices", "Street Food", "Sweets"].map(category => (
        <li key={category} className="widgetListItem">{category}</li>
      ))}
    </ul>
  </div>
);

const RecentPostsWidget = () => (
  <div className="widget">
    <h3>Recent Posts</h3>
    <ul className="widgetList">
      {blogPosts.slice(0, 3).map(post => (
        <li key={post.id} className="widgetListItem">
          <Link to={`/post/${post.id}`} className="widgetLink">{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);

  return post ? (
    <div className="postPage">
      <img src={post.image} alt={post.title} className="postImage" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postContent">{post.content}</p>
      <Link to="/" className="backButton">Back to Home</Link>
    </div>
  ) : (
    <div className="notFound">Post not found.</div>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Alwar Food Blog. All rights reserved.</p>
  </footer>
);

export default Blog;
