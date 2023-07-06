import { NavLink, useNavigate } from "react-router-dom";
import './style.css';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="menu-nav">
      <ul className="menu-header">

        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="empresas">Empresas</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="login">Login</NavLink>
        </li>

        <li className="menu-item" onClick={toggleTheme}>
          Alterar tema (Atual: {theme})        </li>

      </ul>
    </nav>
  )
}
