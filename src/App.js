import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Cart,
  ProductList,
  Navbars,
  Details,
  Default,
  Modal,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { ProductProvider } from "./Context";

function App() {
  return (
    <ProductProvider>
      <Router>
        <React.Fragment>
          <Navbars />

          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/cart" component={Cart} />

            <Route exact path="/details" component={Details} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </React.Fragment>
      </Router>
    </ProductProvider>
  );
}

export default App;
