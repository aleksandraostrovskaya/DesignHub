import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ postSearchContent }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header__left">
          <Link to="/" className="header__logo">LOGO</Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-li">
                <a href="#">Projects</a>
                <ul className="dropdown">
                  <li><a href="#">Project 1</a></li>
                  <li><a href="#">Project 2</a></li>
                  <div className='dropdown-divider'></div>
                  <li><a href="#">For you</a></li>
                  <li><a href="#">Illustration</a></li>
                  <li><a href="#">Graphic design</a></li>
                  <li><a href="#">Photo</a></li>
                </ul>
              </li>
              <li className="header__nav-li"><Link to="/vacancies">Vacancies</Link></li>
              <li className="header__nav-li"><Link to="/vacancies">Specialists</Link></li>
              <li className="header__nav-li"><Link to="/education">Education</Link></li>
              <li className="header__nav-li"><Link to="/support">Support</Link></li>
            </ul>
          </nav>
        </div>

        <div className="header__actions">
          <input type="text" placeholder="Search" className="header__search" />
          {postSearchContent} 
        </div>
      </div>
    </header>
  );
};

export default Header;


// const postSearchContent = (
//   <>
//     <img src={bellIcon} alt="bell" />
//     <img src={Profile} alt="profile" />
//     <button className="header__login">Login</button>
//     <button className="header__register">Register</button>
//   </>
// );



// const postSearchContent = (
//   <>
//      <img src={bellIcon} alt="bell" />
//      <button className="header__login">Login</button>
//      <button className="header__register">Registration</button>
//   </>
// );