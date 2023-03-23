import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const initialState = {};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
