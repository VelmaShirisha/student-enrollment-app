import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import 'react-chatbot-kit/build/main.css';

import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage';
import ChatBotPage from './pages/ChatBotPage';
import ExitPage from './pages/ExitPage';

function App() {
  return (
    <div className='chat-container'>
      <Layout>
        <Switch>
          <Route path='/' exact>
           <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome' exact>
            <WelcomePage />
          </Route>
          <Route path='/chatbot'>
           <ChatBotPage />
          </Route>
          <Route path='/exit'>
            <ExitPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
