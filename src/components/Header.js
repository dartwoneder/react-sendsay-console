import {Link} from 'react-router-dom';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/console">Console</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
