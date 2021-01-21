import Item from "./components/Item/Item";
import { PAGE } from "../../../../constants";
import "./Navbar.css";

const Navbar = ({ currentPage }) => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item active={currentPage === PAGE.HOME} href="HOME">
      Home
    </Item>
    {/* React.createElement */}
    <Item
      active={currentPage === PAGE.RESUME}
      href="RESUME"
      children="Resume"
    />
    <Item
      active={currentPage === PAGE.SERVICES}
      href="SERVICES"
      children="Services"
    />
  </div>
);

export default Navbar;
