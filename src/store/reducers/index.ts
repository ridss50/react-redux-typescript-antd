import { combineReducers } from 'redux';
import {userReducer,IUserState} from "./User/UserReducer";

// Register all reducer
export interface IRootReducer {
  userReducer:any
}

export default combineReducers({
  userReducer
});
