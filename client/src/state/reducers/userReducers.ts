import { ActionType } from "../action-types/userTypes";
import { Action } from "../actions/userActions";

interface LoginState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

export const loginReducer = (
  state: LoginState = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { loading: true, error: null, data: [] };
    case ActionType.LOGIN_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOGIN_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
