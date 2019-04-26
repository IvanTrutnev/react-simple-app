import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul className="footer__nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
    </nav>
  </footer>
)

export default Footer