import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul className="footer__nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer