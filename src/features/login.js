import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

// state
const initialState = {
  isLogged: false,
  token: "",
};

// Action creator
export const userLoginSuccess = createAction("USER_LOGIN_SUCCESS", (data) => ({
  payload: data,
}));
export const userLoginFail = createAction("USER_LOGIN_FAIL", (error) => ({
  payload: error,
}));
export const userLogout = createAction("USER_LOGOUT");

export async function fetchLogin(store, email, password) {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    store.dispatch(userLoginSuccess(data));
  } catch (error) {
    store.dispatch(userLoginFail(error.message));
  }
}

// Reducer
export function loginReducer(state = initialState, action) {
  if (action.type === userLoginSuccess.toString()) {
    return { isLogged: true, token: action.payload.body.token };
  }
  if (action.type === userLoginFail.toString()) {
    return { isLogged: false, token: null, error: action.payload };
  }
  if (action.type === userLogout.toString()) {
    return { isLogged: false, token: null };
  }
  return state;
}
