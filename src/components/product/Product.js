import './Product.scss';

const Product = ({
  name,
  price,
  discountProductsCount,
  discount,
  image,
  freeShipping,
  setCartItems,
}) => {
  const handleAddToCart = () => {
    setCartItems(currentCartItems => [...currentCartItems, name]);
  };

  return (
    <div className="product__wrapper">
      {freeShipping ? (
        <span className="product__free_shipping">Free Shipping</span>
      ) : null}
      <img src={image} className="product__image" alt="product" />
      <h2 className="product__name">{name}</h2>
      <div className="product__separator" />
      <h3 className="product__price">$ {price}</h3>
      <h4 className="product__discount">
        or ${discountProductsCount} x $ {discount}
      </h4>
      <button className="product__cta" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
