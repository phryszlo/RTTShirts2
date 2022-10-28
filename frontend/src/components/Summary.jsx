
function Summary({cartItems}) {

  const calculatePrice = () => {
    let total = 0.00, count = 0;
    cartItems.forEach((product) => {
      let cost = parseFloat(product.price.substring(1)) * product.qty;
      total += cost;
      count += product.qty;
    })
    alert(`${count} items totalling $${parseFloat(total).toFixed(2)}`)
  }

  return (
    <div className="summary-component">
      <h5 className="summary-title">Summary</h5>
      <button type="button" onClick={() => calculatePrice()}>test add</button>
      <div className="summary-display">

      </div>
    </div>
  )
}

export default Summary