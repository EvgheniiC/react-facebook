import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import seitbarReducer from "./seitbarReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: seitbarReducer
});

let store = createStore(reducers);

export default store
