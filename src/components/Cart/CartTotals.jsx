import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "../PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartTax, cartSubTotal, cartTotal, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto ml-lg-auto col-sm-8 text-right text-uppercase">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>

          <h5>
            {" "}
            subtotal: <strong>$ {cartSubTotal}</strong>
          </h5>
          <h5>
            {" "}
            tax: <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            {" "}
            total <strong>$ {cartTotal}</strong>
          </h5>
          <PayPalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </div>
  );
}
