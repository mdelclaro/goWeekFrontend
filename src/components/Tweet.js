import React, { Component } from 'react';

import './Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <hi>{this.props.tweet.content}</hi>
    );
  }
}

export default Tweet;
