import axios from "axios";

import * as actiontypes from "./productConstant";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/Products`);
    dispatch({ type: actiontypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actiontypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actiontypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/Products/${id}`);

    dispatch({ type: actiontypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actiontypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};
