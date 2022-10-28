import SignUpForm from "../components/SignUpForm";
import "./AuthPage.css"
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { setGoogleData } from '../utilities/users-service'
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

export default function AuthPage({ setUser, setGoogleUser }) {

  const [isLogin, setIsLogin] = useState(false);

  // callback for google..initialize
  function handleCallbackResponse(response) {
    console.log(`Encoded JWT ID token: ${response.credential}`)
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setGoogleUser(userObject);
    // set the localStorage for the google user (default exp = 1 hour)
    setGoogleData(userObject, response.credential);
    document.getElementById('signInDiv').hidden = true;
  }



  useEffect(() => {
    /* global google */
    console.log(`client_id=${REACT_APP_GOOGLE_CLIENT_ID}`);
    google.accounts.id.initialize({
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), {
      theme: "outline", size: "small"
    })

    // google.accounts.id.prompt();
  }, [])

  // const loginOrSignup = (login) => {
  //   setIsLogin(login);
  // }
  return (
    <div className="auth-frame">
      <main className='auth-container'  >
        <div>
          <div className="logo">
            <div className="cafe-name">RTT</div>
            <div className="cafe">SHIRTS</div>
          </div>
          <h3
            className="login-toggle"
            onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'LOG IN' : 'SIGN UP'}</h3>
        </div>

        {isLogin ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      </main>
      {/* signInDiv is the target for the google button */}
      <div id="signInDiv"></div>
    </div>
  );
}





{/* <main className='auth-container'>
<div>
<div className="logo">
  <div className="cafe-name">SEI</div>
  <div className="cafe">CAFE</div>
</div>
<h3 className="login-toggle" onClick={() => setIsLogin(!isLogin)}>{isLogin? 'LOG IN' : 'SIGN UP'}</h3>
</div>
{isLogin ?
  <SignUpForm logFn={logMsg} setUser={setUser} />
  :
  <LoginForm logFn={logMsg} setUser={setUser} />
}
</main> */}



// import LoginForm from "../components/LoginForm"
// import { useState } from 'react';

// function AuthPage({ setUser, setGoogleUser }) {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-page">
//       <div className="login-toggle-wrapper">
//         <button onClick={() => {
//           console.log(`isLogin?: ${isLogin}`)
//           setIsLogin(!isLogin)
//           }}>
//           {!isLogin ? 'already have an account' : 'SIGN UP'}
//         </button>
//       </div>
//       <LoginForm isLogin={isLogin} setUser={setUser} />
//     </div>
//   )
// }

// export default AuthPage