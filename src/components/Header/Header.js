import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => (
  <header className="header">
    <nav>
      <ul className="header__nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header