import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/menubar">MenuBar</NavLink></li>
      <li><NavLink to="/address">Address</NavLink></li>
      <li><NavLink to="/study">Study</NavLink></li>
      <li><NavLink to="/skill">Skill</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start (Mobile Dropdown) */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">MySkills</NavLink>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn btn-primary btn-sm">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
