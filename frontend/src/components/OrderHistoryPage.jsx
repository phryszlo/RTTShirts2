import React from 'react'
import {checkToken} from '../utilities/users-service';

function OrderHistoryPage() {

  const handleCheckToken = async () => {
    const expDate = await checkToken();
  }

  return (
    <>
      <h1>Order History</h1>
      <button className="btn-check-token" onClick={handleCheckToken}>Check when my token expires</button>
    </>
  )
}

export default OrderHistoryPage