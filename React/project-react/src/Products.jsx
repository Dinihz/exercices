import React from 'react';
import Title from './Title';
import Product from './Product';

const Products = () => {
  const products = [
    { name: 'Notebook', properties: ['16gb ram', '512gb'] },
    { name: 'Smartphone', properties: ['4ram', '128gb'] },
  ];

  return (
    <section>
      <Title text='Products' />
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </section>
  );
};

export default Products;
