export type UserActionTypes =
  | "USER_LOGIN_REQUEST"
  | "USER_LOGIN_SUCCESS"
  | "USER_LOGIN_FAIL"
  | "USER_LOGOUT"
  | "USER_REGISTER_REQUEST"
  | "USER_REGISTER_SUCCESS"
  | "USER_REGISTER_FAIL"
  | "USER_DETAILS_REQUEST"
  | "USER_DETAILS_SUCCESS"
  | "USER_DETAILS_FAIL"
  | "USER_DETAILS_RESET"
  | "USER_UPDATE_PROFILE_REQUEST"
  | "USER_UPDATE_PROFILE_SUCCESS"
  | "USER_UPDATE_PROFILE_FAIL"
  | "USER_UPDATE_PROFILE_RESET"
  | "USER_LIST_REQUEST"
  | "USER_LIST_SUCCESS"
  | "USER_LIST_FAIL"
  | "USER_LIST_RESET"
  | "USER_DELETE_REQUEST"
  | "USER_DELETE_SUCCESS"
  | "USER_DELETE_FAIL"
  | "USER_UPDATE_REQUEST"
  | "USER_UPDATE_SUCCESS"
  | "USER_UPDATE_FAIL"
  | "USER_UPDATE_RESET";

export const USER_LOGIN_REQUEST: UserActionTypes = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS: UserActionTypes = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL: UserActionTypes = "USER_LOGIN_FAIL";
export const USER_LOGOUT: UserActionTypes = "USER_LOGOUT";

export const USER_REGISTER_REQUEST: UserActionTypes = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS: UserActionTypes = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL: UserActionTypes = "USER_REGISTER_FAIL";

export const USER_DETAILS_REQUEST: UserActionTypes = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS: UserActionTypes = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL: UserActionTypes = "USER_DETAILS_FAIL";
export const USER_DETAILS_RESET: UserActionTypes = "USER_DETAILS_RESET";

export const USER_UPDATE_PROFILE_REQUEST: UserActionTypes =
  "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS: UserActionTypes =
  "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL: UserActionTypes =
  "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET: UserActionTypes =
  "USER_UPDATE_PROFILE_RESET";

export const USER_LIST_REQUEST: UserActionTypes = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS: UserActionTypes = "USER_LIST_SUCCESS";
export const USER_LIST_FAIL: UserActionTypes = "USER_LIST_FAIL";
export const USER_LIST_RESET: UserActionTypes = "USER_LIST_RESET";

export const USER_DELETE_REQUEST: UserActionTypes = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS: UserActionTypes = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL: UserActionTypes = "USER_DELETE_FAIL";

export const USER_UPDATE_REQUEST: UserActionTypes = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS: UserActionTypes = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAIL: UserActionTypes = "USER_UPDATE_FAIL";
export const USER_UPDATE_RESET: UserActionTypes = "USER_UPDATE_RESET";