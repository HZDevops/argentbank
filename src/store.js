import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../src/reducers/loginReducer";
import { userReducer } from "../src/reducers/userReducer";

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
