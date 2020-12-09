import React, { Component } from 'react';

import GuessedWords from '../components/GuessedWords';
import Congrats from '../components/Congrats';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}

export default Home;
