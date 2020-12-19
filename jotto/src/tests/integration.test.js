import { storeFactory } from './testUtils';
import { guessWord } from '../actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccess guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState;
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWords: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for success guess', () => {});
  });
  describe('some guessed words', () => {
    test('updates state correctly for unsuccess guess', () => {});
    test('updates state correctly for success guess', () => {});
  });
});
