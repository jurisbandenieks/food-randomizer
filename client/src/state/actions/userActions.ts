import { UserCredential } from "firebase/auth";
import { ActionType } from "../action-types/userTypes";

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: UserCredential;
}

interface LoginFailedAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

interface GoogleLoginAction {
  type: ActionType.GOOGLE_LOGIN;
}

interface GoogleLoginSuccessAction {
  type: ActionType.GOOGLE_LOGIN_SUCCESS;
  payload: UserCredential;
}

interface GoogleLoginFailedAction {
  type: ActionType.GOOGLE_LOGIN_ERROR;
  payload: string;
}

export type Action =
  | LoginAction
  | LoginSuccessAction
  | LoginFailedAction
  | GoogleLoginAction
  | GoogleLoginSuccessAction
  | GoogleLoginFailedAction;
