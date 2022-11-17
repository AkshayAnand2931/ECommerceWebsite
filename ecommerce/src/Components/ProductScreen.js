import React from "react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import logger from "use-reducer-logger";

const ProductScreen = (props) => {
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

  return (
    <div className="container">
      <div className="product">
        <div className="image">
            <img src={products.image}/>
        </div>
        <div className="details">
            <h1>{products.name}</h1>
            <h2>Rs {products.price}</h2>
            <p>Description to be added</p>
            <form>
                <div className="size-select">
                    <p>Size</p>
                    <label for="small">
                        <input type="radio" name="size" id="small"/>
                        <span>S</span>
                    </label>
                    <label for="medium">
                        <input type="radio" name="size" id="medium"/>
                        <span>M</span>
                    </label>
                    <label for="large">
                        <input type="radio" name="size" id="large"/>
                        <span>L</span>
                    </label>
                    <label for="x-large">
                        <input type="radio" name="size" id="x-large"/>
                        <span>XL</span>
                    </label>
                    <label for="xx-large">
                        <input type="radio" name="size" id="xx-large"/>
                        <span>XXL</span>
                    </label>
                </div>

                <div className="color-select">
                    <p>Color</p>
                    <label for="red">
                        <input type="radio" name="color" id="red"/>
                        <span className="color1"></span>
                    </label>
                    <label for="green">
                        <input type="radio" name="color" id="green"/>
                        <span className="color2"></span>
                    </label>
                    <label for="blue">
                        <input type="radio" name="color" id="blue"/>
                        <span className="color3"></span>
                    </label>
                    <label for="pink">
                        <input type="radio" name="color" id="pink"/>
                        <span className="color4"></span>
                    </label>
                </div>

                <div className="quantity-select">
                    <p>Quantity</p>
                    <input type='number' placeholder="1"/>
                </div>

                <button className="Submit">
                    Add to Cart
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
