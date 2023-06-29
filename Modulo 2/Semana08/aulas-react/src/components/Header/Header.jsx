import { NavLink,useNavigate } from "react-router-dom";
import './style.css';

function Header() {
  
  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="empresas">Empresas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;