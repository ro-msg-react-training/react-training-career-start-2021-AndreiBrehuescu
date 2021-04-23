import axios from "axios";

export const getProducts = async () => {
  const result = await axios.get("http://localhost:8080/products", {});

  return result;
};

export const deleteProductById = async (props: number) => {
  const result = await axios.delete(
    "http://localhost:8080/products/" + props.toString(),
    {}
  );
};
