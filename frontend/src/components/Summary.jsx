import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Summary({ cartItems }) {
  const [show, setShow] = useState();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    try {
      calculatePrice();
    } catch (error) {
      console.log(`useEffect[cartItems] error: ${error}`);
    }
  }, [cartItems])

  useEffect(() => {
    try {
    } catch (error) {
      console.log(`useEffect[cartItems] error: ${error}`);
    }
  }, [cartSubtotal])

  const calculatePrice = () => {
    let total = 0.00, count = 0;
    cartItems.forEach((product) => {
      let cost = parseFloat(product.price.substring(1)) * product.qty;
      total += cost;
      count += product.qty;
    })
    total -= (total * discount);
    setCartSubtotal(total);
  }

  function applyDiscount() {
    try {
      if (promoCode === 'PERSCHOLAS') {
        setDiscount(.1)
      }
      else {
        console.log(`code no good`);
        setDiscount(0);
      }
      calculatePrice();
    } catch (error) {
      console.log(`applyDiscount error: ${error}`);
    }
  }

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="summary-component">
      <h5 className="summary-title">Summary</h5>
      <div className="summary-display">
        {show ?
          <button className="promo-toggle-btn" onClick={toggleShow}>
            <div>Have a Promo Code?{' '}<FaAngleUp /></div>
          </button>
          :
          <button className="promo-toggle-btn" onClick={toggleShow}>
            <div>Have a Promo Code?{' '}<FaAngleDown /></div>
          </button>
        }
        {show ?
          <span className="promo-apply-container">
            <Form.Control
              className="promo-code"
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)} />
            <Button
              className="apply-btn"
              type="button"
              onClick={() => applyDiscount()}>
              apply
            </Button>
          </span>
          :
          ''
        }


        <ListGroup>
          <ListGroup.Item>
            <span className="cart-value-label">Subtotal: </span>
            <span className="cart-value">${cartSubtotal && cartSubtotal.toFixed(2)}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="cart-value-label">Estimated Shipping: </span>
            <span className="cart-value">$5.00</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="cart-value-label">Estimated Tax: </span>
            <span className="cart-value">
              ${cartSubtotal && (cartSubtotal * .07).toFixed(2)}
              </span>
          </ListGroup.Item>
          <Button className="checkout-btn">CHECKOUT</Button>
        </ListGroup>
        {/* 
        Summary
Do you have a Promo Code?
Apply
Subtotal
$1,210.00
Estimated Shipping & Handling
$7.00
Estimated Tax
—
Total

$1,217.00
CheckoutPayPal */}

      </div>
    </div>
  )
}

export default Summary