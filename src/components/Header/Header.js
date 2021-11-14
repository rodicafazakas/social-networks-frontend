import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => { 
  return (
    <nav className="header">
      <ul className="header__list">
        <li className="header__item"> <Link to="register"> SIGN UP </Link></li>
        <li className="header__item"> <Link to="profile"> PROFILE </Link></li>
        <li className="header__item"> <Link to="friends"> FRIENDS </Link></li>
      </ul>
    </nav>
  )
}

export default Header;