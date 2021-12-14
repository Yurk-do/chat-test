import {
  showChatWidget,
  closeChatWidget,
  hideChatWidget,
  showHelpWidget,
  hideHelpWidget,
} from '../freshChat/freshChatWidget';

import { Button } from 'primereact/button';

import './homePage.scss';

const HomePage = () => {
  return (
    <div className="conversations-page">
      <div className="button-container">
        <Button
          label="Open Chat"
          className="button-chat-widget"
          onClick={showChatWidget}
        />
        <Button
          label="Close Chat"
          className="button-chat-widget"
          onClick={closeChatWidget}
        />
        <Button
          label="Hide Chat"
          className="button-chat-widget"
          onClick={hideChatWidget}
        />
      </div>
      <div className="button-container">
        <Button
          label="Show Help"
          className="p-button-success button-chat-widget"
          onClick={showHelpWidget}
        />
        <Button
          label="Hide Help"
          className="p-button-success button-chat-widget"
          onClick={hideHelpWidget}
        />
      </div>
    </div>
  );
};

export default HomePage;
