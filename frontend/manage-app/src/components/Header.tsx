import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3><Link to="/">Task Management</Link></h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
