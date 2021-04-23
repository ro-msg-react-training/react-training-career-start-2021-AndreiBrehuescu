export enum ProductsTableActions {
  GET_PRODUCTS = "GET_PRODUCTS",
}

export interface ProductsTableActionsInterface {
  type: string;
}

export const getProducts = () => {
  return {
    type: "GET_PRODUCTS",
  };
};
