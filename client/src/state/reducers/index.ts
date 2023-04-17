import { combineReducers } from "redux";
import { loginReducer, googleLoginReducer } from "./userReducers";

const reducers = combineReducers({
  login: loginReducer,
  googleLogin: googleLoginReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
