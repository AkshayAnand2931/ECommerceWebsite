import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import logger from "use-reducer-logger";
import { Store } from "../Store";
import { useNavigate } from "react-router";



const ProductScreen = (props) => {

  const navigate = useNavigate();
  const [input,setInput] = useState({size:'small',color:'black',quantity:1});

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${props.slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [props.slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEMS",
      payload: { ...products, input },
    });
  };

  const qtyChange = (event)=>
  {
    setInput({...input,quantity:event.target.value});
  }
  const colorChange = (event)=>
  {
    setInput({...input,color:event.target.id});
  }
  const sizeChange = (event)=>
  {
    setInput({...input,size:event.target.id});
  }

  return (
    <div className="container">
      <div className="product">
        <div className="image">
          <img src={products.image} />
        </div>
        <div className="details">
          <h1>{products.name}</h1>
          <h2>Rs {products.price}</h2>
          <p>{products.description}</p>
          <form>
            <div className="size-select">
              <p>Size</p>
              <label for="small">
                <input type="radio" name="size" id="small" onClick={sizeChange} defaultChecked={true} />
                <span>S</span>
              </label>
              <label for="medium">
                <input type="radio" name="size" id="medium" onClick={sizeChange}/>
                <span>M</span>
              </label>
              <label for="large">
                <input type="radio" name="size" id="large" onClick={sizeChange}/>
                <span>L</span>
              </label>
              <label for="x-large">
                <input type="radio" name="size" id="x-large" onClick={sizeChange}/>
                <span>XL</span>
              </label>
              <label for="xx-large">
                <input type="radio" name="size" id="xx-large" onClick={sizeChange}/>
                <span>XXL</span>
              </label>
            </div>

            <div className="color-select">
              <p>Color</p>
              <label for="black">
                <input type="radio" name="color" id="black" onClick={colorChange} defaultChecked={true}/>
                <span className="color1"></span>
              </label>
              <label for="blue">
                <input type="radio" name="color" id="blue" onClick={colorChange}/>
                <span className="color2"></span>
              </label>
              <label for="yellow">
                <input type="radio" name="color" id="yellow" onClick={colorChange}/>
                <span className="color3"></span>
              </label>
              <label for="red">
                <input type="radio" name="color" id="red" onClick={colorChange}/>
                <span className="color4"></span>
              </label>
            </div>

            <div className="quantity-select">
              <p>Quantity</p>
              <input type="number" placeholder="0" onChange={qtyChange} />
            </div>
          </form>
          <button className="Submit" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
