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
                
            </form>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
