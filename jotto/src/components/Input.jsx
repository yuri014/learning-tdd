import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Input);
