import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import "./Products.css";
import PropTypes from "prop-types";

class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card" style={{ display: "inline-block" }}>
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    style={{ height: "200px" }}
                    className="card-img-top"
                  />
                </Link>

                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0">In Cart</p>
                  ) : (
                    <i className="fas carts fa-cart-plus"></i>
                  )}
                </button>
              </div>
              <div className=" card-footer d-flex justify-content-between ml-3">
                <p className="mb-0">{title}</p>
                <h5 className="font-italic mb-0 mr-3">
                  <span className="mr-1">$</span>
                  {price}
                </h5>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
export default Products;
