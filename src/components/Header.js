import "../blocks/Header.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink exact to="/" className="header__link">
          <div className="header__name">Me</div>
        </NavLink>
      </div>

      <div className="header__avatar-logo-container">
        <div className="header__button-holder"></div>
        <NavLink to="/projects" className="header__link">
          <div className="header__projects">Projects</div>
        </NavLink>
        <NavLink to="/contact" className="header__link">
          <div className="header__contact">Contact</div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
