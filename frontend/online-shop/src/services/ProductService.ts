import React from "react";
import axios from "axios";

class ProductService {
  getProducts() {
    const result = axios.get("http://localhost:8080/products", {});

    return result;
  }
}

export default ProductService;
