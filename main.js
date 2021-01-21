import App from "./components/App/App";
import "./style.css";

const render = () =>
  ReactDOM.render(<App render={render} />, document.querySelector("#root"));

render();
