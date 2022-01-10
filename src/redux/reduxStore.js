import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import seitbarReducer from "./seitbarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: seitbarReducer,
    usersPage: usersReducer,
    auth: authReducer 
});

let store = createStore(reducers);

window.store = store; 

export default store
