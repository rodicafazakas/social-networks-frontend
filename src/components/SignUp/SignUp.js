import React from "react";

const SignUp= () => {
  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <input className="sign-up__username" type="text" id="sign-up__username"/>
        <input className="sign-up__password" type="password" id="sign-up__password"/>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUp;