import React, { Component } from 'react';
import { HubConnection } from '@aspnet/signalr-client';

class Chat extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nick: '',
      message: '',
      messages: [],
      hubConnection: null,
    };
  }

  componentDidMount = () => {
    const nick = window.prompt('Your name:', 'John');

    const hubConnection = new HubConnection('http://localhost:5000/chat');

    this.setState({ hubConnection, nick }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

      this.state.hubConnection.on('sendToAll', (nick, receivedMessage) => {
        const text = `${nick}: ${receivedMessage}`;
        const messages = this.state.messages.concat([text]);
        this.setState({ messages });
      });
    });
  }
  
  render() {
    return <div>Here goes chat</div>;
  }
}

export default Chat;
