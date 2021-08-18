import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import ProductDetails from "./components/Main/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/basket" component={() => <Basket />} />
          <Route
            path="/product/:productId"
            component={() => <ProductDetails />}
          />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
