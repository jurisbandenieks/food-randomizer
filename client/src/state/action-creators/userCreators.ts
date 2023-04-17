import { ActionType } from "../action-types/userTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  getRedirectResult
} from "firebase/auth";

const navigate = useNavigate();

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
      dispatch({
        type: ActionType.GOOGLE_LOGIN
      });

      const result: UserCredential | null = await getRedirectResult(auth);

      if (result) {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;

        dispatch({
          type: ActionType.GOOGLE_LOGIN,
          payload: result
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