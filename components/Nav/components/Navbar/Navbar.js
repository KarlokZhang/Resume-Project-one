import Item from "./components/Item/Item";
import { PAGE } from "../../../../constants";
import "./Navbar.css";

const Navbar = ({ currentPage, obj, render }) => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item
      active={currentPage === PAGE.HOME}
      pageName={PAGE.HOME}
      obj={obj}
      href="HOME"
      children="Home"
      render={render}
    ></Item>
    {/* React.createElement */}
    <Item
      active={currentPage === PAGE.RESUME}
      pageName={PAGE.RESUME}
      obj={obj}
      href="RESUME"
      children="Resume"
      render={render}
    />
    <Item
      active={currentPage === PAGE.SERVICES}
      pageName={PAGE.SERVICES}
      obj={obj}
      href="SERVICES"
      children="Services"
      render={render}
    />
  </div>
);

export default Navbar;
