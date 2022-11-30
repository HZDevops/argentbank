// Action types
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

// state
const initialState = {
  isSucceed: false,
  firstName: "",
  lastName: "",
};

// Reducer
export function userReducer(state = initialState, action) {
  if (action.type === "USER_PROFILE_SUCCESS") {
    return {
      isSucceed: true,
      firstName: action.payload.body.firstName,
      lastName: action.payload.body.lastName,
    };
  }
  if (action.type === "USER_PROFILE_FAIL") {
    return { isSucceed: false, error: action.payload };
  }
  return state;
}
