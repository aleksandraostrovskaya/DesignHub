import React, { useEffect, useRef, useState } from 'react';
import FilterSection from '../filterSection/FilterSection';
import './sort.css';

const Sort = ({ name, onSortChange }) => {
  const sortRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sortOption, setSortOption] = useState({
    date: '',
    alphabet: '',
    popularity: '',
  });

  const toggleSortVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleSortChange = (type, value) => {
    const updatedSortOption = {
      ...sortOption,
      [type]: value,
    };
    
    if (type === 'date') {
      updatedSortOption.alphabet = '';
      updatedSortOption.popularity = '';
    } else if (type === 'alphabet') {
      updatedSortOption.date = '';
      updatedSortOption.popularity = '';
    } else if (type === 'popularity') {
      updatedSortOption.date = '';
      updatedSortOption.alphabet = '';
    }
    
    setSortOption(updatedSortOption);
    onSortChange(updatedSortOption);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target) && event.target.id !== 'sortButton') {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div style={{ position: 'relative' }}>
      <button className="sort-button" onClick={toggleSortVisibility} id="sortButton">
        {name}
      </button>
      <div ref={sortRef} className={`sort ${isVisible ? 'visible' : ''}`}>
        <div className="sort-header">
          <h2>Sort</h2>
          <button>Clear Search</button>
        </div>
        <FilterSection title="By date">
          <label style={{ color: sortOption.date === 'asc' ? 'blue' : 'black' }}>
            <input
              type="radio"
              checked={sortOption.date === 'asc'}
              name="date"
              value="asc"
              className="hidden-radio"
              onChange={() => handleSortChange('date', 'asc')}
            />
            Ascending
          </label>
          <label style={{ color: sortOption.date === 'desc' ? 'blue' : 'black' }}>
            <input
              type="radio"
              name="date"
              value="desc"
              className="hidden-radio"
              checked={sortOption.date === 'desc'}
              onChange={() => handleSortChange('date', 'desc')}
            />
            Descending
          </label>
        </FilterSection>
        <FilterSection title="By alphabet">
          <label style={{ color: sortOption.alphabet === 'asc' ? 'blue' : 'black' }}>
            <input
              type="radio"
              name="alphabet"
              value="asc"
              className="hidden-radio"
              checked={sortOption.alphabet === 'asc'}
              onChange={() => handleSortChange('alphabet', 'asc')}
            />
            Ascending (A-Z)
          </label>
          <label style={{ color: sortOption.alphabet === 'desc' ? 'blue' : 'black' }}>
            <input
              type="radio"
              name="alphabet"
              value="desc"
              className="hidden-radio"
              checked={sortOption.alphabet === 'desc'}
              onChange={() => handleSortChange('alphabet', 'desc')}
            />
            Descending (Z-A)
          </label>
        </FilterSection>
        <FilterSection title="By popularity">
          <label style={{ color: sortOption.popularity === 'likes' ? 'blue' : 'black' }}>
            <input
              type="radio"
              name="popularity"
              value="likes"
              className="hidden-radio"
              checked={sortOption.popularity === 'likes'}
              onChange={() => handleSortChange('popularity', 'likes')}
            />
            By number of likes
          </label>
          <label style={{ color: sortOption.popularity === 'views' ? 'blue' : 'black' }}>
            <input
              type="radio"
              name="popularity"
              value="views"
              className="hidden-radio"
              checked={sortOption.popularity === 'views'}
              onChange={() => handleSortChange('popularity', 'views')}
            />
            By number of views
          </label>
        </FilterSection>
      </div>
    </div>
  );
};

export default Sort;