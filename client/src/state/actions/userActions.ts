import { ActionType } from "../action-types/userTypes";

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: string[];
}

interface LoginFailedAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

export type Action = LoginAction | LoginSuccessAction | LoginFailedAction;
