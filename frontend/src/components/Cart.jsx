import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart({ cartItems, addToCart, removeFromCart, setCartCount }) {

  return (
    <div className="cart-component">
      <h4 className="cart-title">In your cart</h4>
      {/* { cartItems && cartItems.map((item, index) => { */}
      {cartItems && cartItems.map((product, index) => {
        return (
          <>
            <Card className="bs-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.detail}<br />
                </Card.Text>
                  <span className="product-price"> {`${product.price} each`}</span>
                <div className="inc-dec-cart">
                  <span className="card-count">{product.qty}</span>
                  <Button id={product.id} variant="primary" size="sm" onClick={(e) => removeFromCart(e.target.id)}>-</Button>
                  <Button id={product.id} variant="primary" size="sm" onClick={(e) => addToCart(e.target.id)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        )
      })}

      {cartItems && cartItems.length === 0 &&
        <div className="return-home-wrapper">
          <h2 className="no-cart">Your cart is empty.</h2>
          <Button className="return-home-btn">
            <Link className="return-home-link" to="/">
              Continue shopping
            </Link>
          </Button>
        </div>
      }

    </div >
  )
}

export default Cart