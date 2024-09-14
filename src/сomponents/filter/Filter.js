import React from 'react';
import './filter.css';
import FilterSection from '../filterSection/FilterSection';

const Filter = ({
  sections = [],
  onFilterChange = () => {},
  onClearFilters = () => {},
  filters = {}
}) => {
  
  const handleCheckboxChange = (sectionTitle, item) => {
    onFilterChange(sectionTitle, item);
  };

  const handleClearFilters = () => {
    onClearFilters();
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <h2>Filter</h2>
        <button onClick={handleClearFilters}>Clear Search</button>
      </div>
      {sections.map((section, index) => (
        <FilterSection key={index} title={section.title}>
          {section.items.map((item, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                className="styled-checkbox"
                checked={filters[section.title]?.includes(item) || false}
                onChange={() => handleCheckboxChange(section.title, item)}
              />
              {item}
            </label>
          ))}
        </FilterSection>
      ))}
    </div>
  );
};

export default Filter;

