// IMPORT REACT
import React from "react";
import { useState } from "react";
// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

// CREATE COMPONENT
const Navbar = ({ user, googleUser, setGoogleUser, setCartItems, handleSignOut, setUser, cartCount }) => {
  const [index, setIndex] = useState(0);
  const [userObj, setUserObj] = useState(null);


  useEffect(() => {
    if (user) {
      // alert(JSON.stringify(user))
      // console.logs in useEffect[] only appear for a split second
      setUserObj(user);
    }
  }, []);

  // handleLogOut is for regular user logout. handleSignOff is for google user (in App.js)
  function handleLogOut() {
    console.log(`cleared state from user signout`)
    logOut();
    setUser(null);
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="logo-main">
        <img
          className="cornerLogo"
          alt=""
          src="https://c.smartrecruiters.com/sr-careersite-image-prod/5524344ce4b09eef8cbabfee/37a86b5b-adb4-4728-910b-6b64aedf8fa8"
        ></img>
        <h2 className="titleBar"> Per Scholas RTT-Shirts </h2>

        <div className="logOut">
          {Object.keys(googleUser).length !== 0 ? (
            <div className="googleStuff">
              <div google-nav-unit>
                <img
                  className="g-profile-img"
                  src={googleUser.picture}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="g-signout" onClick={(e) => handleSignOut(e)}>
                sign out
              </button>
            </div>
          ) : (
            user && (
              <div>
                <div className="user-logout-unit">
                  <div style={{ width: "100px", wordWrap: "break-word" }}></div>
                  <button className="u-signout" onClick={(e) => handleLogOut()}>
                    sign out
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

       
    {/*{Object.keys(googleUser).length !== 0 || user && */}
      <div className="topnav" id="myTopnav">
        <Link to="testimonial">
          Testimonials
        </Link>
        <Link to="FindStore">
          Find Store
        </Link>
        <Link to="cart" style={{fontSize: '17px'}}>
        Cart {" "} 
        <BsCart style={{backgroundColor: 'transparent', marginLeft: '.5em', fontSize: '17.5px'}} /> 
        <span style={{fontSize: '14px', backgroundColor: 'transparent'}}>{cartCount}</span>
        </Link>
        <Link to="/">
          Home
        </Link>
      </div>
     
    </>
  );
};
// EXPORT COMPONENT
export default Navbar;
