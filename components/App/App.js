import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";
import { PAGE } from "../../constants";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE.HOME,
    };
  }

  render() {
    const { currentPage } = this.state;

    const changePage = (pageName) => {
      this.setState({ currentPage: pageName });
    };

    return (
      <div className="app">
        <div className="container">
          <Nav currentPage={currentPage} changePage={changePage} />
          <Pages currentPage={currentPage} />
        </div>
      </div>
    );
  }
}

export default App;
