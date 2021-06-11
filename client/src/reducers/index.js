import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import useReducer from './userReducer';
import topicReducer from './topicReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    user: useReducer,
    topics: topicReducer,
    app: appReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
