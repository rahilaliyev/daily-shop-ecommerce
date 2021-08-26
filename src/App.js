import React, { Suspense, lazy } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
const ProductDetails = lazy(() => import("./components/Main/ProductDetails"));
const Basket = lazy(() => import("./components/Basket/Basket"));
const Register = lazy(() => import("./components/LoginRegister/Register"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Header />
          <Switch>
            <Route path="/" exact component={() => <Main />} />
            <Route path="/basket" component={() => <Basket />} />
            <Route
              path="/product/:productId"
              component={() => <ProductDetails />}
            />
            <Route path="/register" component={() => <Register />} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
