import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="container">
      <Nav />
      <Pages />
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
