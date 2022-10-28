import Cart from "../components/Cart";
import Summary from "../components/Summary";
import './CartPage.css';

function CartPage({ cartItems, products, addToCart, removeFromCart }) {
  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart} />
      <Summary cartItems={cartItems} />
    </div>
  )
}

export default CartPage