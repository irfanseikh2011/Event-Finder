import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>
          <img src={logo} alt="Logo" />
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li className='header-login'><a href='/login'>Login</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header