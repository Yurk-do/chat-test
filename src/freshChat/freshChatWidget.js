export const freshChatWidgetInit = () => {
  window.fcWidget.setExternalId();

  window.fcWidget.user.setProperties({
    plan: 'Pro',
    status: 'Active',
  });

  window.fcWidget.init({
    token: 'c0490d0e-ad14-45b2-830d-f2b2c37d4434',
    host: 'https://wchat.eu.freshchat.com',
  });
};

export const showChatWidget = () => {
  window.fcWidget.open();
};

export const closeChatWidget = () => {
  window.fcWidget.close();
};

export const hideChatWidget = () => {
  window.fcWidget.hide();
};

export const showHelpWidget = () => {
  window.FreshworksWidget('show', 'launcher');
};

export const closeHelpWidget = () => {
  window.fcWidget.close();
};

export const hideHelpWidget = () => {
  window.FreshworksWidget('hide', 'launcher');
};
