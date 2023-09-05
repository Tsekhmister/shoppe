import { SET_ALL_PRODUCTS } from "../actions/actionCreater";

const initialState = {
  products: [],
}

const products = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
      default: return state;
  }
}

export default products;