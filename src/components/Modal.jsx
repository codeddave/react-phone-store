import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="container ">
                  <div className="row">
                    <div className="col-8 mainmodal mx-auto text-center col-md-6 col-lg-4 p-5">
                      <h5>Item added to the cart </h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5>${price}</h5>
                      <Link to="/">
                        <button
                          className="contbtn"
                          onClick={() => closeModal()}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="contbtn"
                          onClick={() => closeModal()}
                        >
                          Go To Cart{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return;
        }}
      </ProductConsumer>
    );
  }
}
export default Modal;
