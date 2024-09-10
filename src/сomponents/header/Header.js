import React from 'react';
import './header.css';

import bellIcon from '../../img/icon/bell.svg'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
                </ul></li>
								<li className="header__nav-li"><Link to="/vacancies">Vacancies</Link></li>
								<li className="header__nav-li"><Link to="/specialists">Specialists</Link></li>
								<li className="header__nav-li"><a href="#">Education</a></li>
								<li className="header__nav-li"><a href="#">Support</a></li>
							</ul>
						</nav>
				</div>

        <div className="header__actions">
          <input type="text" placeholder="Search" className="header__search" />
          {isAuthenticated ? (
            <>
              <button className="header__share">Share the project</button>
					    <img src={bellIcon} alt="bell" />
              <img src={user.picture} alt="User" className="header__avatar"/>
            </>
          ) : (
            <>
					    <img src={bellIcon} alt="bell" />
              <button className="header__login" onClick={() => loginWithRedirect()}>Login</button>
              <button className="header__register" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Registration</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
};

export default Header;