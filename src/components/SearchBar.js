import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <div className="nav">
        <p className="header">Devfinder.</p>
        <button>
          light <i class="fas fa-sun fa-lg"></i>
        </button>
      </div>
      <div className="searchBar">
        <i class="fas fa-search fa-2x"></i>
        <input type="text" placeholder="Search GitHub username..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
