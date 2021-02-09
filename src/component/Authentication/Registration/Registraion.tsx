import React from "react";
import "./Registration.css"
import {useHistory} from "react-router";

const Register = () => {

  const history = useHistory();
  const signIn = () => {
    history.push("/login")
  }
  return(
    <div className="body-style">

      <div className="container" id="container">
        <div className="form-container sign-up-container">
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="form-style">
            <h1>Signing UP!</h1>

            <span>Join with us!</span>
            <input type="text" placeholder="Name"/>
            <br/>
            <input type="email" placeholder="Email"/>
            <br/>
            <input type="password" placeholder="Password"/>
            <br/>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signIn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

export default Register
