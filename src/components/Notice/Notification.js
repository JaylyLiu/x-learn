import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Notice from './Notice';

class Notification extends Component {
  constructor() {
    super();
    this.transitionTime = 300;
    this.state = { notices: [] };
    this.removeNotice = this.removeNotice.bind(this);
  }

  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`;
  }

  addNotice(notice) {
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    if (notices.every(item => item.key !== notice.key)) {
      notices.push(notice);
      this.setState({ notices });
      if (notice.duration > 0) {
        setTimeout(() => {
          this.removeNotice(notice.key);
        }, notice.duration);
      }
    }
    return () => {
      this.removeNotice(notice.key);
    };
  }

  removeNotice(key) {
    const { notices } = this.state;
    this.setState({
      notices: notices.filter(notice => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime);
          return false;
        }
        return true;
      }),
    });
  }

  render() {
    const { notices } = this.state;
    return (
      <TransitionGroup className="message-notification">
        {notices.map(notice => (
          <CSSTransition
            key={notice.key}
            classNames="message-notice-wrapper notice"
            timeout={this.transitionTime}>
            <Notice notice={notice} removeNotice={this.removeNotice} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

export default Notification;
