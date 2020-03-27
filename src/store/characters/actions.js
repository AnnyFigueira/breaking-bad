import Characters from '../../services/Characters';

/* This can be further declared in a helper and imported in all of my actions that use axios */
const formatApiErrorResponse = ({ response, message }) => {
  if (response) {
    return {
      ...response,
      message,
    };
  }
  return {
    status: 0,
    message,
  };
};

export const LOADING_CHARACTERS = 'LOADING_CHARACTERS';
const loadingCharacters = () => ({
  type: LOADING_CHARACTERS,
});

export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
const receiveCharacters = (characters) => ({
  type: RECEIVE_CHARACTERS,
  characters,
});

export const getCharacters = () => {
  return async (dispatch) => {
    dispatch(loadingCharacters());
    try {
      const response = await new Characters().getAll();
      if (response) {
        dispatch(receiveCharacters(response.data));
      }
      return response;
    } catch (error) {
      console.log('Error in get characters', error);
      return formatApiErrorResponse({
        response: error.response,
        message: 'Erro. Atualize a página',
      });
    }
  };
};
