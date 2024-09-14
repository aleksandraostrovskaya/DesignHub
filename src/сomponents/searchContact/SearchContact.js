import React from 'react';
import styles from './SearchContact.module.css';
import { Link } from 'react-router-dom';

const SearchContact = ({ text, link }) => {
  return (
    <section className={styles.searchSection}>
        <input type="text" placeholder="Search" className={styles.searchBar} />
        <input type="search" placeholder="Search" className={styles.searchBlue} />
        <button className={styles.contactButton}>
          <Link to={link}>{text}</Link>
        </button>
    </section>
  );
};

export default SearchContact;

