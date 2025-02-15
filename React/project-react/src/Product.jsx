import React from 'react';

const Product = ({ name, properties }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem', padding: '1rem' }}>
      <p>{name}</p>
      <ul>
        {properties.map((property) => (
          <li key={property}>{property}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
