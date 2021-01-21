import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";
import { PAGE } from "../../constants";
import "./App.css";

const obj = {
  currentPage: PAGE.HOME,
};

const App = ({ render }) => (
  <div className="app">
    <div className="container">
      <Nav currentPage={obj.currentPage} obj={obj} render={render} />
      <Pages currentPage={obj.currentPage} />
    </div>
  </div>
);

export default App;

// =>

// 为什么有 jsx 的地方，就一定需要有 React?
// React.createElement('div', { className: 'main' }, [
//   React.createElement('div', { className: 'container' }),
//   // ...
// ]);
