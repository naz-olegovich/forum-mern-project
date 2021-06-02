import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import useReducer from "./userReducer";
import topicReducer from "./topicReducer";

const rootReducer = combineReducers({
    user: useReducer,
    topics: topicReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))