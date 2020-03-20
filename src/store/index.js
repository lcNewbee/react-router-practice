import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginReducer from './login/loginReducer';

const store = createStore(
  combineReducers({
    loginState: loginReducer
  }),
  applyMiddleware(logger, thunk)
)

export default store