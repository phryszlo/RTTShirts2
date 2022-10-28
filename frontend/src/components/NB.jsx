// IMPORT REACT
import React from "react";
import { useState } from "react";
// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import { useEffect } from "react";
// CREATE COMPONENT
const Navbar = ({ user, googleUser, handleSignOut, setUser }) => {
  const [index, setIndex] = useState(0);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    if (user) {
      // alert(JSON.stringify(user))
      // console.logs in useEffect[] only appear for a split second
      setUserObj(user);
    }
  }, []);
  function handleLogOut() {
    // Delegate to the users-service
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
                logoff
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
        <Link as={Link} to="products">
          Products
        </Link>
        <Link as={Link} to="cart">
          Cart
        </Link>
        <Link as={Link} to="/">
          Home
        </Link>
      </div>
     
    </>
  );
};
// EXPORT COMPONENT
export default Navbar;
