import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttribute, checkProps } from '../tests/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

const rendersWithoutError = wrapper => {
  const component = findByTestAttribute(wrapper, 'component-guessed-words');
  expect(component.length).toBe(1);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    rendersWithoutError(wrapper);
  });

  test('renders instructions to guessed word', () => {
    const instructions = findByTestAttribute(wrapper, 'guessed-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    rendersWithoutError(wrapper);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
