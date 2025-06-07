import React from 'react';

const SortControls = ({ sortBy, onSortChange }) => {
  return (
    <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} style={{ marginBottom: '10px' }}>
      <option value="name">Sort by Name</option>
      <option value="price">Sort by Price</option>
      <option value="rating">Sort by Rating</option>
    </select>
  );
};

export default SortControls;
