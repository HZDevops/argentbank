import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

// state
const initialState = {
  isSucceed: false,
  firstName: "",
  lastName: "",
};

// Action creator
export const userProfilSuccess = createAction(
  "USER_PROFILE_SUCCESS",
  (data) => ({
    payload: data,
  })
);
export const userProfileFail = createAction("USER_PROFILE_FAIL", (error) => ({
  payload: error,
}));

export async function userProfile(store, token) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    );
    store.dispatch(userProfilSuccess(data));
  } catch (error) {
    store.dispatch(userProfileFail(error));
  }
}

// Reducer
export function userReducer(state = initialState, action) {
  if (action.type === userProfilSuccess.toString()) {
    return {
      isSucceed: true,
      firstName: action.payload.body.firstName,
      lastName: action.payload.body.lastName,
    };
  }
  if (action.type === userProfileFail.toString()) {
    return { isSucceed: false, error: action.payload };
  }
  return state;
}
