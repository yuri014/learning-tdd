import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  if (guessedWord === secretWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
  }
};

export const getSecretWord = () => dispatch =>
  axios.get('http://localhost:8000').then(({ data }) => {
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: data,
    });
  });
