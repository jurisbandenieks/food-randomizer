import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  AnyAction
} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { loginReducer } from "./reducers/userReducers";

export interface RootState {}

const reducer = combineReducers<RootState>({
  login: loginReducer
});

export const initialState: RootState = {};

const store: Store<RootState, AnyAction> = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>)
);

export default store;
