import axios from "axios";

export const getProducts = async () => {
  const result = await axios
    .get("http://localhost:8080/products")
    .then((result) => {
      return result.data;
    });

  return result;
};

export const deleteProductById = async (id: number) => {
  const result = await axios.delete(
    "http://localhost:8080/products/" + id.toString()
  );

  return result;
};

export const updateProductById = async (id: number, product: any) => {
  const result = await axios.put(
    "http://localhost:8080/products/" + id.toString(),
    product
  );

  return result;
};
