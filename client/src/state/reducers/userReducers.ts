import { User } from "firebase/auth";
import { ActionType } from "../action-types/userTypes";
import { Action } from "../actions/userActions";

interface LoginState {
  loading: boolean;
  error: string | null;
  user: User | string | null;
}

const initialState = {
  loading: false,
  error: null,
  user: null
};

export const loginReducer = (
  state: LoginState = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { loading: true, error: null, user: null };
    case ActionType.LOGIN_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.LOGIN_ERROR:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};

export const googleLoginReducer = (
  state: LoginState = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case ActionType.GOOGLE_LOGIN:
      return { loading: true, error: null, user: null };
    case ActionType.GOOGLE_LOGIN_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.GOOGLE_LOGIN_ERROR:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};
