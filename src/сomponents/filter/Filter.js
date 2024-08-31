import React from 'react';
import './filter.css';
import FilterSection from '../filterSection/FilterSection'

const Filter = ({sections}) => {
  return (
    <div className="filter">
      <div className="filter-header">
        <h2>Filter</h2>
        <button>Clear Search</button>
      </div>
      {sections.map((section, index) => (
        <FilterSection key={index} title={section.title}>
          {section.items.map((item, idx) => (
            <label key={idx}>
              <input type="checkbox" className="styled-checkbox" />
              {item}
            </label>
          ))}
        </FilterSection>
      ))}
    </div>
  );
};

export default Filter;
