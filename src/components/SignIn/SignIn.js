import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="sign-in-form" autoComplete="off" noValidate>
        <input className="sign-in__username" type="text" id="sign-in__username" />
        <input className="sign-in__password" type="password" id="sign-in__password" />
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  )
}

export default SignIn;