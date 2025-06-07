import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, searchTerm, sortBy }) => {
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }, [products, searchTerm, sortBy]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
