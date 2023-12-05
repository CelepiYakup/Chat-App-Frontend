import React, { Component }  from 'react';
import './ChatHistory.scss';
import Message from '../Message/Message';

class ChatHistory extends Component{
    render(){
        console.log(this.props.ChatHistory)
        this.props.ChatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data} />)
        
    }
}