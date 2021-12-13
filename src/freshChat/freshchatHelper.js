export const init = (authData) => {
  window.fcWidget.setExternalId();

  window.fcWidget.user.setFirstName(authData.name);

  window.fcWidget.user.setEmail(authData.email);

  window.fcWidget.user.setProperties({
    plan: 'Pro',
    status: 'Active',
  });

  window.fcWidget.init({
    token: 'c0490d0e-ad14-45b2-830d-f2b2c37d4434',
    host: 'https://wchat.eu.freshchat.com',
  });
};

export const showConversations = () => {
  init();
  window.fcWidget.open();
};

export const closeConversations = () => {
  init();
  window.fcWidget.close();
};
