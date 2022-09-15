import React, { useState, useEffect } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";
function Home() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const respose = await fetch("https://fakestoreapi.com/products");
   
    let data = await respose.json()
    data = data.map((proditem)=>{
      return {
        ...proditem , 
        itemCount : 1
      }
    
    })
    setProduct(data);
    console.log(data )
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const maxPrice = () => {
    const datasort = product.slice();
    datasort.sort((a, b) => b.price - a.price);
    setProduct(datasort);
  };
  const lowPrice = () => {
    const datasort = product.slice();
    datasort.sort((a, b) => a.price - b.price);
    setProduct(datasort);
  };
  const maxRate = () => {
    const datasort = product.slice();
    datasort.sort((a, b) => b.rating.rate - a.rating.rate);
    setProduct(datasort);
  };
  const lowRate = () => {
    const datasort = product.slice();
    datasort.sort((a, b) => a.rating.rate - b.rating.rate);
    setProduct(datasort);
  };
  const onReset = () => {
    console.log("hey reset");
    window.location.reload();
  };
  const addProd = (items) => {
  
    dispatch(add(items));
  };
  const addCart = () => {
    history("/cart");
  };
  return (
    <div>
      <div className="header">
        <div className="left_head">
          <div className="margin">
            <select name="cars" id="filter">
              <option value="price">Price</option>
              <option onClick={maxPrice} value="price">
                Price ↑
              </option>
              <option onClick={lowPrice} value="price">
                Price ↓
              </option>
            </select>
          </div>
          <div className="margin">
            <select name="cars" id="filter">
              <option value="price">Rate</option>
              <option onClick={maxRate} value="price">
                Rate ↑
              </option>
              <option onClick={lowRate} value="price">
                Rate ↓
              </option>
            </select>
          </div>
          <div onClick={onReset} className="margin reset">
            ↺ Reset
          </div>
        </div>
        <div className="right_head"></div>
        <div className="margin">
          Search :
          <input
            value={search}
            onChange={onSearch}
            className="inputs"
            type="text"
          ></input>
        </div>
        <div className="margin">
          <button onClick={addCart} className="cart_btn">
            {" "}
            Cart
          </button>
        </div>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Rate</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>
          <tbody>
            {product
              .filter((items) => {
                if (search === "") {
                  return items;
                } else if (items.title.includes(search)) {
                  return items;
                }
              })
              .map((items) => {
                return (
                  <tr>
                    <th>
                      <img className="items_img" src={items.image}></img>
                    </th>
                    <td className="items_title">{items.title}</td>
                    <td>{items.rating.rate}</td>
                    <td>{items.rating.count}</td>
                    <td>{items.price}</td>
                    <td>
                      <button
                        className="cartbtn"
                        onClick={() => addProd(items)}
                      >
                        Cart
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
