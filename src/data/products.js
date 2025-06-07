const products = Array.from({ length: 200 }, (_, id) => ({
  id,
  name: `Product ${id + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
  rating: Math.floor(Math.random() * 5) + 1,
  discount: Math.floor(Math.random() * 30),
}));

export default products;
