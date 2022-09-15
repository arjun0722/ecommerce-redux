import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { removefromcart, total } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart);

  const handleDelete = (id) => {
    dispatch(removefromcart(id));
  };
  const proceed = (data) => {
    alert("THANKU  FOR  THE  SHOPPING");
  };
  return (
    <div>
      <div className="main_div">
        <div className="table_con">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>

                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        X
                      </button>
                    </td>
                    <td>
                      <img className="items_img" src={item.image}></img>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price} $</td>
                    <td>{item.price} $</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="card-body">
            <button onClick={proceed} className="proceed">
              Proceed{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
