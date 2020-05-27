import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import "./Details.css";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto  my-4">
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} className="img-fluid" alt="product" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 mt-5">
                      <h3>{title}</h3>
                      <h5 style={{ color: "#3498db" }}>${price}</h5>

                      <p className="lead text-muted">{info}</p>

                      {/* Buttons*/}
                      <div>
                        <Link to="/">
                          <button className="btnn">Back To Products</button>
                        </Link>

                        <button
                          className="detailcart"
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addToCart(id);
                            value.openModal(id)
                          }}
                        >
                          {inCart ? "In Cart" : "Add To Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
