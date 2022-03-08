import { AUTH_USER } from "../constants";

export function authUser(user) {
  return {
    type: AUTH_USER,
    payload: user
  }
}