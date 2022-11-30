import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "./store.js";

// Login action

export const login = (email, password) => async (dispatch) => {
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

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};
