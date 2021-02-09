import {
  LIST_USER_DATA,
  ERROR_USER_DATA,
  DELETE_USER_DATA,
  VIEW_USER_DATA,
  CLEAR_USER_DATA, ADD_USER_DATA, UPDATE_USER_DATA
} from "../actionType/actionType";
import axios from "axios"

export const login = (email:string,password:string, callBack: any) => {
  return (dispatch:any) => {
    axios.post(  `https://reqres.in/api/login`,{email:email,password:password}).then((response) => {
      callBack(response);
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};

export const getListUserData = () => {
  return (dispatch:any) => {
    axios.get(  `https://reqres.in/api/users?delay=3`).then((response) => {
      dispatch({ type: LIST_USER_DATA , payload: response.data });
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};


export const deleteUserData = (id:number) => {
  return (dispatch:any) => {
    axios.delete(  `https://reqres.in/api/users/${id}`).then((response) => {
      dispatch({ type: DELETE_USER_DATA , payload: response.data });
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};


export const viewUserData = (id:number) => {
  return (dispatch:any) => {
    axios.get(  `https://reqres.in/api/users/${id}`).then((response) => {
      dispatch({ type: VIEW_USER_DATA , payload: response.data });
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};

export const clearUserData = () => {
  return (dispatch:any) => {
    dispatch({ type: CLEAR_USER_DATA  });
  }
};

export const addUserData = (Name:string,job:string) => {
  return (dispatch:any) => {
    axios.post(  `https://reqres.in/api/users`,{data:{name:Name,job:job}}).then((response) => {
      dispatch({ type: ADD_USER_DATA , payload: response.data });
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};



export const updateUserData = (id:number,Name:string,job:string) => {
  return (dispatch:any) => {
    axios.put(  `https://reqres.in/api/users/${id}`,{data:{name:Name,job:job}}).then((response) => {
      dispatch({ type: UPDATE_USER_DATA , payload: response.data });
    }).catch(function (error) {
      dispatch({ type: ERROR_USER_DATA ,payload:error });
    });
  }
};
