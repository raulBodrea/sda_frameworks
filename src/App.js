import { useState, useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Products from './components/products/Products';

import initialProducts from './mocks/products.json';
import Cart from './components/cart/Cart';

function App() {
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (!filters.length) {
      setCurrentProducts(initialProducts);
      return;
    }

    const newProductSelection = initialProducts.filter(currentProduct =>
      filters.includes(currentProduct.size)
    );
    setCurrentProducts(newProductSelection);
  }, [filters]);

  return (
    <>
      <Cart cartItems={cartItems} />
      <div className="content_wrapper">
        <Sidebar filters={filters} setFilters={setFilters} />
        <Products
          setCartItems={setCartItems}
          currentProducts={currentProducts}
        />
      </div>
    </>
  );
}

export default App;
