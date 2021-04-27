import { CartActionsEnum, CartActionsInterface } from "../actions/CartActions";
import { Product } from "../interfaces/ProductInterfaces";

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const CartReducer = (
  state = initialState,
  action: CartActionsInterface
): CartState => {
  switch (action.type) {
    case CartActionsEnum.ADD_PRODUCT_TO_CART:
      console.log(action.payload);
      const prod = state.products;
      prod.push(action.payload);
      return {
        ...state,
        products: prod,
      };

    default:
      return state;
  }
};
