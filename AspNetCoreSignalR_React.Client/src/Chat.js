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

  componentDidMount() {
    const nick = window.prompt('Your name:', 'John');

    const hubConnection = new HubConnection('http://localhost:5000/chat');

    this.setState({ hubConnection, nick });
  }

  render() {
    return <div>Here goes chat</div>;
  }
}

export default Chat;
