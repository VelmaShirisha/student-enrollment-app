// src/components/Chatbot.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

import config from '../chatbot/config';
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";


const ChatBotPage = () => {
  return (
    <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
  );
};

export default ChatBotPage;
