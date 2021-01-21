import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";
import { PAGE } from "../../constants";
import "./App.css";

const currentPage = PAGE.HOME;

const App = () => (
  <div className="app">
    <div className="container">
      <Nav currentPage={currentPage} />
      <Pages currentPage={currentPage} />
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
