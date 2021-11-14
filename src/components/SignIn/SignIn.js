import React, { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

const SignIn = () => {

  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const { loginUser } = useUser();

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    })
  };

  const onSubmit = (event) => {
    event.prevent.default();
    loginUser(userData);
    navigate("/profile");
  }

  return (
    <div className="sign-in">
      <h1>FriendsBook</h1>
      <div className="sign-in__container">
        <h2>Sign in</h2>

        <form className="sign-in__form" autoComplete="off" noValidate onSubmit={onSubmit}>
          <div className="sign-in__inputs">

            <input className="sign-in__username" 
                   type="text" 
                   id="sign-in__username" 
                   placeholder="Username"
                   onChange={changeUserData} />

            <input className="sign-in__password" 
                   type="password" 
                   id="sign-in__password" 
                   placeholder="Password"
                   onChange={changeUserData} />

            <button type="submit">Sign in</button>

            <button type="submit">Create new account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;