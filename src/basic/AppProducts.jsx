import React, { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <p>CI/CD Test</p>
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
