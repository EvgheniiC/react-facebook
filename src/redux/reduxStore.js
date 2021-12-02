import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import seitbarReducer from "./seitbarReducer"
import usersReducer from "./usersReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: seitbarReducer,
    usersPage: usersReducer 
});

let store = createStore(reducers);

window.store = store; 

export default store
