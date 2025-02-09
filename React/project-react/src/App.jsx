import React from 'react';
import Header from './Header';
import Home from './Home';
import Products from './Products';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/products') {
    Component = Products;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
