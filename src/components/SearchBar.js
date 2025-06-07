import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
    />
  );
};

export default SearchBar;
