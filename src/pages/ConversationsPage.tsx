import { useState } from 'react';

import {
  init,
  showConversations,
  closeConversations,
} from '../freshChat/freshchatHelper';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import './conversationsPage.scss';

const ConversationsPage = () => {
  const [dataAuthForm, setDataAuthForm] = useState({
    name: '',
    email: '',
  });

  const changeAuthFormData = (event: any) => {
    setDataAuthForm((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendAuthFormData = (data: any) => {
    init(data);
  };

  return (
    <div className="conversations-page">
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <h2>Aвторизация</h2>
        <div>
          <label htmlFor="name" className="label" style={{ width: '100px' }}>
            Имя пользователя
          </label>
          <div className="input-container">
            <InputText name="name" onChange={changeAuthFormData} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="label" style={{ width: '100px' }}>
            Адрес электронной почты
          </label>
          <div className="input-container">
            <InputText name="email" onChange={changeAuthFormData} />
          </div>
        </div>
        <Button
          label="Авторизироваться"
          className="button-form "
          icon="pi pi-check"
          onClick={() => sendAuthFormData(dataAuthForm)}
        />
      </form>
      <div className="button-container">
        <Button
          label="Open Conversation"
          className="button-widget"
          onClick={showConversations}
        />
        <Button label="Close Conversations" onClick={closeConversations} />
      </div>
    </div>
  );
};

export default ConversationsPage;
