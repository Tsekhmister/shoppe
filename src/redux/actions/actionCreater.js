export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";

export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS,
});

export const setAllProducts = (payload) => ({
  type: SET_ALL_PRODUCTS,
  payload,
});

