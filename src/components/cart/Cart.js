import './Cart.scss';

const Cart = ({ cartItems }) => (
  <div className="shopping_cart__wrapper">
    <img
      src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
      alt="shopping cart"
      className="shopping_cart__image"
    />
    <span className="shopping_cart__products_count">{cartItems.length}</span>
  </div>
);

export default Cart;
