import Sort from '../sort/Sort'
import './searchBar.css'

const SearchBar = () => {
	return (
    <div className="search-bar container">
      <div className="employment-type">
        <button className="employment-button">Full-time</button>
        <button className="employment-button">Part-time</button>
        <button className="employment-button">Remote</button>
      </div>

			<div className="controls-container">
      <div className="search-controls">
        <input type="text" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
        <Sort />
			</div>

    </div>
  )
}

export default SearchBar;
