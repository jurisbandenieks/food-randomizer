import { ActionType } from "../action-types/userTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/userActions";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN
    });

    try {
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.LOGIN_ERROR,
          payload: err.message
        });
      }
    }
  };
};
