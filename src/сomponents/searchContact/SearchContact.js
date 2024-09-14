import React from 'react'
import './SearchContact.css'
import { Link } from 'react-router-dom'


const SearchContact = ({ text }) => {
  return (
    <section className="search-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <input type="search" placeholder="Search" className="search-blue"/>
        <button className="contact-button"><Link>{text}</Link></button>
    </section>
  );
};

export default SearchContact
