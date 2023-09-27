import { createChatBotMessage } from 'react-chatbot-kit';

import StartBtn from './components/StartBtn';
import Calendar from './components/Calendar';
import AgeDropdown from './components/AgeDropdown';

const config = {
  botName: 'student',
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: "startBtn"
  })],

  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,

    },

    {
      widgetName: 'calendar',
      widgetFunc: (props) => <Calendar {...props} />,
    },

    {
      widgetName: 'age',
      widgetFunc: (props) => <AgeDropdown {...props} />
    }
  ]
};

export default config;