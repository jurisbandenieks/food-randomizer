import { ActionType } from "../action-types/userTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/userActions";
import { Auth, UserCredential, getRedirectResult } from "firebase/auth";

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

export const googleLogin = (auth: Auth) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result: UserCredential | null = await getRedirectResult(auth);

      if (result) {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;

        dispatch({
          type: ActionType.GOOGLE_LOGIN_SUCCESS,
          payload: result.user
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.GOOGLE_LOGIN_ERROR,
          payload: err.message
        });
      }
    }
  };
};
