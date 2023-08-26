import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoginRducer from './inLogin';

const allReducer = combineReducers({
  counter: counterReducer,
  isLogin: isLoginRducer,
});

export default allReducer;
