import { LOADING_CHARACTERS, RECEIVE_CHARACTERS } from './actions';

const initialState = {
  list: [],
  isLoading: false,
  isLoadingSubmit: false,
  error: null,
};

export default function characters(state = initialState, action) {
  switch (action.type) {
    case LOADING_CHARACTERS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_CHARACTERS:
      return {
        ...state,
        isLoading: false,
        list: action.characters,
      };
    default:
      return state;
  }
}
