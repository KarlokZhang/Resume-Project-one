// 我需要在 Nav 里面不再显示 Logo
// 就近维护原则

import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import "./Nav.css";

const Nav = ({ currentPage, changePage }) => (
  <header className="nav">
    <div className="nav__left">
      <Logo />
    </div>
    <div className="nav__right">
      <Navbar currentPage={currentPage} changePage={changePage} />
    </div>
  </header>
);

export default Nav;
