import React, { Component } from 'react';

class Chat extends Component {
  constructor() {
    this.state = {
      nick: '',
      message: '',
      messages: [],
      hubConnection: null,
    };
  }

  render() {
    return <div>Here goes chat</div>;
  }
}

export default Chat;
