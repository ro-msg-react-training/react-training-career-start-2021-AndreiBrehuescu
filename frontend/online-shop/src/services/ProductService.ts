import axios from "axios";

class ProductService {
  props: any;
  constructor() {}

  getProducts() {
    const result = axios.get("http://localhost:8080/products", {});

    return result;
  }

  deleteProductById(props: number) {
    console.log("http://localhost:8080/products/" + props.toString());
    const result = axios.delete(
      "http://localhost:8080/products/" + props.toString(),
      {}
    );
  }
}

export default ProductService;
