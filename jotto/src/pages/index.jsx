import React, { Component } from 'react';

import GuessedWords from '../components/GuessedWords';
import Congrats from '../components/Congrats';

class Home extends Component {
  render() {
    return (
      <div className="container mx-auto bg-gray-900 font-sans min-h-screen min-w-full text-gray-100 flex flex-col justify-evenly items-center">
        <h1 className="text-5xl">Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}

export default Home;
