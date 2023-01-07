import Product from '../product/Product';
import './Products.scss';

const Products = ({ currentProducts, setCartItems }) => {
  return (
    <div className="products">
      {currentProducts.length} Product(s) found
      <div className="products__wrapper">
        {currentProducts.map(product => (
          <Product
            setCartItems={setCartItems}
            name={product.name}
            price={product.price}
            discountProductsCount={product.discountProductsCount}
            discount={product.discount}
            image={product.image}
            freeShipping={product.freeShipping}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
