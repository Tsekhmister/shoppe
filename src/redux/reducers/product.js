import { SET_PRODUCT } from "../actions/actionCreater";

const initialState = {
  product: [],
}

const product = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: [...payload],
      };
      default: return state;
  }
}

export default product;