import React from 'react'
import './SearchContact.css'

function SearchContact() {
  return (
    <section className="search-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <input type="search" placeholder="Search" className="search-blue"/>
        <button className="contact-button">Contact Us</button>
    </section>
  )
}

export default SearchContact
