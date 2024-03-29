import Item from "./components/Item/Item";
import { PAGE } from "../../../../constants";
import "./Navbar.css";

const ITEMS = [
  {
    key: PAGE.HOME,
    text: "Home",
  },
  {
    key: PAGE.RESUME,
    text: "Resume",
  },
  {
    key: PAGE.SERVICES,
    text: "Services",
  },
];

const Navbar = ({ currentPage, changePage }) => (
  <div className="navbar">
    {ITEMS.map((item) => (
      <Item
        key={item.key}
        active={currentPage === item.key}
        onClick={() => changePage(item.key)}
      >
        {item.text}
      </Item>
    ))}
  </div>
);

export default Navbar;
