import { useState } from 'react'
import Sort from '../sort/Sort'
import './searchBar.css'

const SearchBar = ({nameSort, onSearchChange}) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchClick = () => {
    onSearchChange(searchTerm);
  }

	return (
    <div className="search-bar container">
      <div className="employment-type">
        <button className="employment-button">Full-time</button>
        <button className="employment-button">Part-time</button>
        <button className="employment-button">Remote</button>
      </div>

			<div className="controls-container">
      <div className="search-controls">
        <input type="text" placeholder="Search" onChange={handleSearchInputChange}/>
        <button className="search-button" onClick={handleSearchClick}>Search</button>
      </div>
        <Sort name={nameSort}/>
			</div>

    </div>
  )
}

export default SearchBar;
