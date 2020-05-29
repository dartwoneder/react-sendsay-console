import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from 'src/store/actions/auth';

export default function Header() {
  const dispatch = useDispatch();
  const doLogout = () => dispatch(logout());

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
        <button onClick={doLogout}>doLogout</button>
      </nav>
    </header>
  );
}
