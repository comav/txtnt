import { AUTH_USER } from "../constants";

const initialState = {
  user: undefined
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload
      };
    default: 
      return state;
  }
}

export default authReducer;