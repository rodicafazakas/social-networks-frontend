import { useState } from "react";
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
    event.preventDefault();
    loginUser(userData);
    navigate("/home");
  }

  return (
    <div className="sign-in">
      
      <div className="sign-in__container">
        <h2>Sign in</h2>

        <form className="sign-in__form" autoComplete="off" noValidate onSubmit={onSubmit}>
          <div className="sign-in__inputs">

            <input className="sign-in__username" 
                   type="text" 
                   id="username"
                   placeholder="Username"
                   onChange={changeUserData} />

            <input className="sign-in__password" 
                   type="password" 
                   id="password" 
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