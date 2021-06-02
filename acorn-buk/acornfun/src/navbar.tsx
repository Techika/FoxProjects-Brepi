import { NavLink } from "react-router-dom";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav id="nav">
      <NavLink exact to="/" activeClassName="active-page">
        Home page
      </NavLink>
      <NavLink exact to="/simple/states" activeClassName="active-page">
        With states
      </NavLink>
    </nav>
  );
};

export default Navbar;
