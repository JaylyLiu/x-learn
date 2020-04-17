import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import './message.scss';

function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notification />, div);
  return {
    addNotice(notice) {
      return notification && notification.addNotice(notice);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
}

let notification;
const notice = (type, content, duration = 2000, onClose) => {
  if (!notification) notification = createNotification();
  return (
    notification && notification.addNotice({ type, content, duration, onClose })
  );
};

export default {
  success(content, duration, onClose) {
    return notice('success', content, duration, onClose);
  },
  error(content, duration, onClose) {
    return notice('error', content, duration, onClose);
  },
};
