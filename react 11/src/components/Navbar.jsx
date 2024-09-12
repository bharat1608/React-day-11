import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/authors">Authors</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
