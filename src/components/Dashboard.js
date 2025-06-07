import React, { useState, useCallback } from 'react';
import productsData from '../data/products';
import SearchBar from './SearchBar';
import SortControls from './SortControls';
import ProductList from './ProductList';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleSearch = useCallback((term) => setSearchTerm(term), []);
  const handleSortChange = useCallback((value) => setSortBy(value), []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Dashboard</h2>
      <SearchBar onSearch={handleSearch} />
      <SortControls sortBy={sortBy} onSortChange={handleSortChange} />
      <ProductList products={productsData} searchTerm={searchTerm} sortBy={sortBy} />
    </div>
  );
};

export default Dashboard;
