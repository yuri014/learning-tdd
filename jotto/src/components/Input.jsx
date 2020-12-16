import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <input
          type="text"
          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
          data-test="input-box"
          placeholder="enter guess word..."
        />
        <button
          type="submit"
          data-test="submit-button"
          className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
