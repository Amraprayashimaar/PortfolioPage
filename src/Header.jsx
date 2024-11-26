import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar>
        <div className="logo">MyPortfolio</div>
        <nav className="nav-links">
          {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70} // Adjusts for header height
              className="nav-link"
            >
              {section}
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
