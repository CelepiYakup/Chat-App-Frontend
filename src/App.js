import React, { Component } from 'react';
import Header from './Components/Header/Header';
import ChatHistory from './Components/ChatHistory/ChatHistory';
import ChatInput from './Components/ChatInput/ChatInput';
import './App.css';
import { connect, sendMsg } from './Api/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatHistory: [],
    };
  }

  componentDidMount() {
    // Assuming connect is a function to establish a WebSocket connection
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        ChatHistory: [...prevState.ChatHistory, msg],
      }));
      console.log(this.state);
    });
  }

  send(event){
    if (event.keyCode === 13){
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <ChatHistory ChatHistory={this.state.ChatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
