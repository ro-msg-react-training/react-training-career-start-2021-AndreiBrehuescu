import { CartActionsEnum, CartActionsInterface } from "../actions/CartActions";
import { Product } from "../interfaces/ProductInterfaces";

export interface CartState {
  products: Product[];
  isLoading: boolean;
}

const initialState: CartState = {
  products: [],
  isLoading: false,
};

export const CartReducer = (
  state = initialState,
  action: CartActionsInterface
): CartState => {
  switch (action.type) {
    case CartActionsEnum.ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CartActionsEnum.ADD_PRODUCT_TO_CART:
      const prod = state.products;
      prod.push(action.payload);
      return {
        ...state,
        products: prod,
        isLoading: false,
      };

    default:
      return state;
  }
};
