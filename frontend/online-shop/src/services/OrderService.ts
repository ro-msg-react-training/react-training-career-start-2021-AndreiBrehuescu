import axios from "axios";
import { OrderDtoInterface } from "../interfaces/OrderInterface";

export const addNewOrder = async (orderDto: OrderDtoInterface) => {
  return await axios.post("http://localhost:8080/orders", orderDto);
};
