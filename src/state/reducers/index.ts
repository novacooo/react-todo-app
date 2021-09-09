import { combineReducers } from 'redux';
import themeReducer from 'state/reducers/themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
