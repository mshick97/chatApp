import './App.css';
import React, { useState } from 'react';
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';

function App() {

  return (
    <div className="App">
      <ChatEngineWrapper>
        <ChatSocket
          projectID={process.env.REACT_APP_PROJECT_ID}
          chatID={process.env.REACT_APP_CHAT_ID}
          chatAccessKey={process.env.REACT_APP_CHAT_ACCESS_KEY}
          senderUserName='max'
        />

        <ChatFeed activeChat={process.env.REACT_APP_CHAT_ID} />
      </ChatEngineWrapper>
    </div>
  );
}

export default App;