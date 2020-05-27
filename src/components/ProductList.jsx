import React, { Component } from "react";
import Products from "./Products";

import { ProductConsumer } from "../Context";

class ProductList extends Component {
  render() {
    return (
      <div>
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
