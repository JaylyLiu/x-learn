import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

class Button extends Component {
  static propTypes = {
    classnames: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  stopPropagation = evt => {
    evt = evt || window.event; //获取event对象
    if (evt && evt.stopPropagation)
      //因此它支持W3C的stopPropagation()方法
      evt.stopPropagation();
    else {
      //否则，我们需要使用IE的方式来取消事件冒泡
      window.event.cancelBubble = true;
    }
  };

  render() {
    const {
      classnames,
      children,
      disabled,
      style,
      onClick,
      id,
      href,
      target,
      classNameWrap,
    } = this.props;
    const myButton = (
      <button
        id={id}
        type="button"
        className={classnames}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        {children}
      </button>
    );

    if (href && !disabled) {
      return (
        <a
          href={href}
          target={target || '_self'}
          className={classNameWrap}
          onClick={this.stopPropagation}>
          {myButton}
        </a>
      );
    } else {
      return myButton;
    }
  }
}

const withStyle = WrappedComponent =>
  class extends Component {
    static propTypes = {
      iistyle: PropTypes.oneOf([
        'default',
        'main',
        'success',
        'error',
        'instant-tutoring',
        'pure',
      ]),
      size: PropTypes.oneOf(['big', 'standard', 'medium', 'small']),
    };

    static defaultProps = {
      iistyle: 'default',
      size: 'standard',
    };

    state = {
      loading: false,
    };

    onClick = async event => {
      if (this.props.async) {
        this.setState({ loading: true });
        await this.props.onClick(event);
        this.setState({ loading: false });
      } else {
        this.props.onClick && this.props.onClick(event);
      }
    };

    render() {
      const {
        className,
        ghost,
        loading,
        iistyle,
        shadowed,
        size,
        gradient,
        action,
        ...rest
      } = this.props;
      const classnames = cx(className, 'btn', `btn-${size}`, {
        [`btn-${iistyle}`]: !ghost,
        [`btn-ghost-${iistyle}`]: ghost,
        'btn-shadowed': shadowed,
        'btn-gradient': gradient,
        [`btn-action-${size}`]: action,
        'btn-loading': loading || this.state.loading,
      });
      return (
        <WrappedComponent
          {...rest}
          disabled={this.props.disabled || loading || this.state.loading}
          classnames={classnames}
          onClick={this.onClick}
        />
      );
    }
  };

export default withStyle(Button);
