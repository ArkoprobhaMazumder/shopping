import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductContext from './Components/context/ProductContext';
import CartContext from './Components/context/CartContext';
import FilterContext from './Components/context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContext>
    <FilterContext>
      <CartContext>
        <App />
      </CartContext>
    </FilterContext>
  </ProductContext>
);
