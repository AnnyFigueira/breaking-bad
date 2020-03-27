import { combineReducers } from 'redux';
import characters from './characters/reducer';

/* I'm doing this assuming I might need to have more reducers in the future */
export default combineReducers({
  characters,
});
