import React, { Component } from 'react';
import IconClose from './images/icon_close.svg';
import IconChecked from './images/icon_checked.svg';
import IconError from './images/icon_error.svg';

class Notice extends Component {
  clearNotice(key) {
    this.props.removeNotice(key);
  }

  render() {
    const icons = {
      success: IconChecked,
      error: IconError,
    };
    const { type, content, key } = this.props.notice;
    return (
      <div className={`message-notice ${type}`}>
        <img src={icons[type]} alt={type} />
        <span>{content}</span>
        <img
          onClick={this.clearNotice.bind(this, key)}
          className="message-close"
          src={IconClose}
          alt="close"
        />
      </div>
    );
  }
}

export default Notice;
