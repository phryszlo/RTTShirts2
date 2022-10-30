import './style.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// my components etc.
import { getCartItems, getUser, logOut, putCartInStorage } from './utilities/users-service'
import AuthPage from "./pages/AuthPage";
import HomePage0 from './components/HomePage0';
import CartPage from './pages/CartPage';
import tShirts from './data/data';
import Navbar from './components/NB';
import Testimonial from './components/Testimonial.jsx';
import Mappy from './pages/Mappy';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
// REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyB-AJWcIWytaWPIQ5HHFIOgMzGDRfNVhTA


function App() {
  const [user, setUser] = useState(getUser());
  const [googleUser, setGoogleUser] = useState({});
  const [cartItems, setCartItems] = useState();
  const [cartCount, setCartCount] = useState(0);
  const { products } = tShirts;

  const navigate = useNavigate();


  useEffect(() => {
    console.log(`maps api key: ${REACT_APP_GOOGLE_MAPS_API_KEY}`)
  }, [])

  useEffect(() => {
    try {
      // console.log(`initial cartItems: ${JSON.stringify(cartItems)}`);
      console.log(`email going to storage: ${user && Object.keys(user).length > 0 && user.email}`);
      console.log(`email going to storage: ${googleUser && Object.keys(googleUser).length > 0 && googleUser.email}`);

      // don't save an empty cart at this point. storage cart should only be cleared explicitly.
      if (cartItems.length === 0) return;
      if (user && user.email) {
        console.log(`putting user ${user.email} in storage`);
        console.log(`cartItems (useff[cartitems]: ${JSON.stringify(JSON.parse(localStorage.getItem("userCart"))?.cartItems)}`)
        putCartInStorage(cartItems, user.email);
      }
      else if (googleUser && googleUser.email) {
        console.log(`putting g-user ${googleUser.email} in storage`);
        putCartInStorage(cartItems, googleUser.email);
      }

    } catch (error) {
      console.log(`useEffect[cartItems] error: ${error}`);
    }
  }, [cartItems])

  useEffect(() => {
    console.log(`JSON.stringify(user)`)
    setCartItems(getCartItems(user && user.email));
  }, [user])
  useEffect(() => {
    console.log(`JSON.stringify(googleUser)`)
    setCartItems(getCartItems(user && googleUser.email));
  }, [googleUser])

  // this method adapted from Terrell Owens's solution at:
  // https://codesandbox.io/s/cart-forked-ejm0md?file=/src/App.js
  function addToCart(id) {
    console.log(`add to cart ${id}`);

    // locate the product id in the products and get that product object
    const product = products.find((x) => x.id === parseInt(id));

    // check if the cart already contains this item
    const productInCart = cartItems.find((x) => x.id === parseInt(id));

    // if cart has this item, just increment the qty on that item,
    // else, add the item and a new qty prop set to 1.

    if (productInCart) {
      setCartItems(
        cartItems.map((x) =>
          x.id === productInCart.id ? { ...productInCart, qty: productInCart.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    setCartCount(cartCount + 1);
  }

  const removeFromCart = (id) => {
    console.log(`remove from cart ${id}`);

    // check if the cart already contains this item
    const productInCart = cartItems.find((x) => x.id === parseInt(id));

    // if somehow we got here and this product is not in the cart, cancel.
    if (!productInCart) return;

    // if cart has >1 item, qty--,
    // otherwise, remove the one item.
    if (productInCart.qty === 1) {
      console.log(`prod qty = 1 & ${JSON.stringify(cartItems.filter((x) => x.id !== id))}`)
      setCartItems(cartItems.filter((x) => x.id !== parseInt(id)))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === productInCart.id ? { ...productInCart, qty: productInCart.qty - 1 } : x
        )
      );
    }

    setCartCount(cartCount + 1);

  };

  // this handles signout for google user.
  // std. user signout is in navbar logout
  function handleSignOut(e) {
    setGoogleUser({});
    // setUser({});
    // setCartItems([]);
    console.log(`cleared state from google signout`)
    logOut();
    // navigate('/');
  }

  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
    // return <Spinner />;
  };
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <div className="App">

      <Navbar
        handleSignOut={handleSignOut}
        googleUser={googleUser}
        user={user}
        setUser={setUser}
        cartCount={cartCount}
        setGoogleUser={setGoogleUser}
        setCartItems={setCartItems}
      />
      {user || (Object.keys(googleUser).length !== 0) ?
        <div className="content-shell">
          <Routes>
            <Route path="/" element={<HomePage0 addToCart={addToCart} setCartCount={setCartCount} />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/cart" element={<CartPage
              cartItems={cartItems}
              products={products}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              setCartCount={setCartCount} />} />
            <Route
              path="/FindStore"
              element={<Wrapper apiKey={"AIzaSyB-AJWcIWytaWPIQ5HHFIOgMzGDRfNVhTA"} render={render}>
                <Mappy center={center} zoom={zoom} />
              </Wrapper>} />
          </Routes>
        </div>
        :
        <AuthPage
          setUser={setUser}
          setGoogleUser={setGoogleUser}
          handleSignOut={handleSignOut}
        />
      }
    </div>
  );
}

export default App;