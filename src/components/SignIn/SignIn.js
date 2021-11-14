import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Sign in</h2>

      <form className="sign-in__form" autoComplete="off" noValidate>
        <div className="sign-in__inputs">
          <input className="sign-in__username" type="text" id="sign-in__username" placeholder="Username" />
          <input className="sign-in__password" type="password" id="sign-in__password" placeholder="Password"/>
          <button type="submit">SIGN IN</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;