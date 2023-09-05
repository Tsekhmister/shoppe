import { takeEvery, put, call } from "@redux-saga/core/effects";
import { getProducts } from "../../api";
import { GET_ALL_PRODUCTS } from "../actions/actionCreater";
import { setAllProducts } from "../actions/actionCreater";

export function* handleAllProducts() {
  try {
    const data = yield call(getProducts);
    yield put(setAllProducts(data));
  } catch (error) {
    throw new Error(error)
  }
}

export function* watchClickSga() {
  yield takeEvery(GET_ALL_PRODUCTS, handleAllProducts);
}

export default function* rootSaga() {
  yield watchClickSga();
}
