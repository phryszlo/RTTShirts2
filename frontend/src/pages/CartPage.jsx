import Cart from "../components/Cart";
import Summary from "../components/Summary";
import './CartPage.css';

function CartPage({ cartItems, products, addToCart, removeFromCart, setCartCount }) {
  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setCartCount={setCartCount} />
      <Summary cartItems={cartItems} setCartCount={setCartCount} />
    </div>
  )
}

export default CartPage