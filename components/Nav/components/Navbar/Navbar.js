import Item from "./components/Item/Item";
import { PAGE } from "../../../../constants";
import "./Navbar.css";

const Navbar = ({ currentPage, changePage }) => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item
      active={currentPage === PAGE.HOME}
      pageName={PAGE.HOME}
      onClick={() => changePage(PAGE.HOME)}
    >
      Home
    </Item>
    {/* React.createElement */}
    <Item
      active={currentPage === PAGE.RESUME}
      pageName={PAGE.RESUME}
      onClick={() => changePage(PAGE.RESUME)}
    >
      Resume
    </Item>
    <Item
      active={currentPage === PAGE.SERVICES}
      pageName={PAGE.SERVICES}
      onClick={() => changePage(PAGE.SERVICES)}
    >
      Services
    </Item>
  </div>
);

export default Navbar;
