import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
  <header className="header">
    <nav>
      <ul className="header__nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header