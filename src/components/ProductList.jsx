import React, { Component } from "react";
import Products from "./Products";

import Carousel from "./Carousel";

import { ProductConsumer } from "../Context";

class ProductList extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Products key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div> //
    );
  }
}
export default ProductList;
