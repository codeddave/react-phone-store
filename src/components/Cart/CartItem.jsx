import React from "react";

function CartItem({ item, value }) {
  const { id, img, price, total, count, title } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-3 text-capitalize text-center ">
      <div className=" col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className=" col-10 mx-auto col-lg-2">
        <span> product: {title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span> price: ${price}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn minus-btn mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
          <span className="btn minus-btn mx-1"> {count}</span>
          <span
            className="btn minus-btn mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            {" "}
            +{" "}
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
export default CartItem;
