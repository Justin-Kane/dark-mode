import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleDarkMode = e => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link class="link" to='/' >Home</Link>
      <Link class="link" to='/about'>About</Link>
      <Link class="link" to='/contact'>Contact</Link>
      <div className="dark-mode__toggle" onClick={() => toggleDarkMode()}>
        <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
