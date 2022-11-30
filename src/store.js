import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// state
const initialState = {
  isLogged: false,
  token: "",
};

// Action types
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

// Reducer
function loginReducer(state = initialState, action) {
  if (action.type === "USER_LOGIN_SUCCESS") {
    return { isLogged: true, token: action.payload.body.token };
  }
  if (action.type === "USER_LOGIN_FAIL") {
    return { isLogged: false, token: null, error: action.payload };
  }
  return state;
}

export const store = createStore(loginReducer, applyMiddleware(thunk));
