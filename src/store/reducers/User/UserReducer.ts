import {
  LIST_USER_DATA,
  ADD_USER_DATA,
  ERROR_USER_DATA,
  UPDATE_USER_DATA,
  VIEW_USER_DATA,
  DELETE_USER_DATA,
  CLEAR_USER_DATA, GET_DATA, LOGIN
} from "../../actionType/actionType";

export interface IUserState {
  userList:any
  errorMessage:string
}
export interface IAction {
  payload: any;
  type: string
}
const initialState: any = {
    userList:undefined,
    errorMessage:"",
    deletedUser:undefined,
    singleUser:undefined,
    addedUser:undefined,
    user:undefined,
    updatedUserData:undefined,
    loginData:undefined
}

export const userReducer = (state: any = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN:{
      return {
        ...state,
        loginData: action.payload,
      }
    }
    case LIST_USER_DATA:{
        return {
          ...state,
          userList: action.payload,
          deletedUser:""
        }
    }
    case ERROR_USER_DATA:{
      return {
        ...state,
        errorMessage:"Something went wrong"
      }
    }
    case DELETE_USER_DATA:{
      return {
        ...state,
        deletedUser:action.payload === "" && "success"
      }
    }
    case VIEW_USER_DATA:{
      return {
        ...state,
        singleUser:action.payload
      }
    }
    case CLEAR_USER_DATA:{
      return {
        ...state,
        singleUser:undefined
      }
    }
    case ADD_USER_DATA:{
      return {
        ...state,
        addedUser:action.payload
      }
    }
    case UPDATE_USER_DATA:{
      return {
        ...state,
        updatedUserData: action.payload
      }
    }
    default: {
      return {...state};
    }
  }
}
