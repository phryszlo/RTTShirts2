import { Card, Button } from 'react-bootstrap';

function Cart({ cartItems, addToCart, removeFromCart }) {

  return (
    <div className="cart-component">
      <h2 className="cart-title">In your cart</h2>
      {/* { cartItems && cartItems.map((item, index) => { */}
      {cartItems.map((product, index) => {
        return (
          <>
            <Card className="bs-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.detail}<br />
                  <span className="product-price"> {`${product.price} each`}</span>
                </Card.Text>
                <div className="inc-dec-cart">
                  <span className="card-count">{product.qty}</span>
                  <Button id={product.id} variant="primary" size="sm" onClick={(e) => addToCart(e.target.id)}>+</Button>
                  <Button id={product.id} variant="primary" size="sm" onClick={(e) => removeFromCart(e.target.id)}>-</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        )
      })}
    </div>
  )
}

export default Cart