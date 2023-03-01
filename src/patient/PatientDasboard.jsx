import React from 'react'
import { useState } from 'react';
const PatientDasboard = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
      setIsSideNavOpen(!isSideNavOpen);
    };
  
    return (
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link" onClick={toggleSideNav}>
              About
            </a>
            <ul className={`dropdown-menu ${isSideNavOpen ? "open" : ""}`}>
              <li className="dropdown-item">
                <a href="#">Mission</a>
              </li>
              <li className="dropdown-item">
                <a href="#">History</a>
              </li>
              <li className="dropdown-item">
                <a href="#">Team</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className={`sidenav ${isSideNavOpen ? "open" : ""}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </nav>
    );
  }

export default PatientDasboard