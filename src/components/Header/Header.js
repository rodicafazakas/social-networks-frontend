import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => { 
  return (
    <nav className="header">
      <h1>FriendsBook</h1>
      <ul className="header__list">
        <li className="header__item"> <Link to="login"> SIGN IN </Link></li>
        <li className="header__item"> <Link to=""> HOME </Link></li>
        <li className="header__item"> <Link to="register"> SIGN UP </Link></li>
        
        
      </ul>
    </nav>
  )
}

export default Header;