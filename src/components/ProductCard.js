import React, { useMemo } from 'react';

const ProductCard = ({ product }) => {
  const finalPrice = useMemo(() => {
    for (let i = 0; i < 10000000; i++) {} // simulate expensive calculation
    return product.price - (product.price * product.discount / 100);
  }, [product.price, product.discount]);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Final Price: ${finalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
