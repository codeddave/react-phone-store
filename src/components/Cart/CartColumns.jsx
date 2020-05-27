import React from "react";

function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>products</p>
        </div>
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>name of product</p>
        </div>
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>price</p>
        </div>
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>quantity</p>
        </div>
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>remove</p>
        </div>
        <div className="col-10 mx-auto text-uppercase col-lg-2">
          <p>total</p>
        </div>
      </div>
    </div>
  );
}
export default CartColumns;
