import Item from "./components/Item/Item";
import { PAGE } from "../../../../constants";
import "./Navbar.css";

const Navbar = ({ currentPage, changePage }) => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item
      active={currentPage === PAGE.HOME}
      pageName={PAGE.HOME}
      changePage={changePage}
      href="HOME"
      children="Home"
    ></Item>
    {/* React.createElement */}
    <Item
      active={currentPage === PAGE.RESUME}
      pageName={PAGE.RESUME}
      changePage={changePage}
      href="RESUME"
      children="Resume"
    />
    <Item
      active={currentPage === PAGE.SERVICES}
      pageName={PAGE.SERVICES}
      changePage={changePage}
      href="SERVICES"
      children="Services"
    />
  </div>
);

export default Navbar;
