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
  Footer,
} from "./components";
import { Route, Switch } from "react-router-dom";
import { ProductProvider } from "./Context";

function App() {
  return (
    <ProductProvider>
      <React.Fragment>
        <Navbars />

        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    </ProductProvider>
  );
}

export default App;
