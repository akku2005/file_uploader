import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>File Upload And Download</h1>
      <nav>
        <Link to="/" exact={true}>
          Home
        </Link>
        <Link to="/list">
          Files List
        </Link>
      </nav>
    </div>
  );
};

export default Header;
