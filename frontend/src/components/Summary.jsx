import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

function Summary({ cartItems }) {
  const [show, setShow] = useState();
  const [promoCode, setPromoCode] = useState(null);
  const [discount, setDiscount] = useState(0);

  const calculatePrice = () => {
    let total = 0.00, count = 0;
    cartItems.forEach((product) => {
      let cost = parseFloat(product.price.substring(1)) * product.qty;
      total += cost;
      count += product.qty;
    })
    total -= (total * discount);
    alert(`${count} items totalling $${parseFloat(total).toFixed(2)}`)
  }
  function applyDiscount() {
    try {
      if (promoCode === 'PERSCHOLAS') setDiscount(.1)
      else {
         console.log(`code no good`);
         setDiscount(0);
      }
    } catch (error) {
      console.log(`applyDiscount error: ${error}`);
    }
  }

  function toggleShow() {
    console.log(`something toggled it`);
    setShow(!show);
  }

  return (
    <div className="summary-component">
      <h5 className="summary-title">Summary</h5>
      <button type="button" onClick={() => calculatePrice()}>test add</button>
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
            <button
              className="apply-btn"
              type="button"
              onClick={() => applyDiscount()}>
              apply
            </button>
          </span>
          :
          ''
        }
        {/* <ToggleVisibility className="promo-toggle">
          <span className="promo-apply-container">
            <input
              className="promo-code"
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)} />
            <button className="apply-btn" type="button" onClick={
              () => applyDiscount()
            }>
              apply
            </button>
          </span>
        </ToggleVisibility> */}
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