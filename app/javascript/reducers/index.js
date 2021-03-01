import { combineReducers } from "redux";

const groupsReducer = (state = [] ,action) => {
  // TO DO MOVE API CALL HERE
  if (action.type === "DASHBOARD_API_INDEX") {
    return action.payload.data;
  }
  return state;
};

const modalReducer = (state = { isShown: false }, action) => {
  if (action.type === "CHANGE_MODAL") {
    return action.payload;
  } else if ( action.type ==="CLOSE_MODAL"){
    return action.payload
  }
  return state;
};

const appStateReducer = (appState = null, action) => {
  if (action.type === "CHANGING_APP_STATE") {
    return action.payload;
  }
  return appState;
};

const modalContentReducer = (state = null ,action) => {
  if (action.type === 'GET_PLANT') {
    return action.payload
  }
  return state
}

export default combineReducers({
  appState: appStateReducer,
  reduxGroups: groupsReducer,
  modal: modalReducer,
  modalContentReducer: modalContentReducer
});
