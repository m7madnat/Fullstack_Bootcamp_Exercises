import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h1>Capsules</h1>
      <Link to='/' style={{ margin: '1rem' }}>
        home
      </Link>
      <Link to='/group-one' style={{ margin: '1rem' }}>
        One
      </Link>
      <Link to='/group-two' style={{ margin: '1rem' }}>
        Two
      </Link>
    </div>
  );
}

export default Nav;
