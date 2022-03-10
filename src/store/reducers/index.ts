import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";


export const rootreducer = combineReducers({
    users: userReducer,
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootreducer>