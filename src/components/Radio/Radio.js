import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import shallowEqual from 'shallowequal';
import RcCheckbox from 'rc-checkbox';
import './Radio.css';

class Radio extends Component {
  static propTypes = {
    iistyle: PropTypes.oneOf(['primary', 'darken', 'success']),
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    value: PropTypes.any,
  };

  static defaultProps = {
    iistyle: 'primary',
    prefixCls: 'i-radio',
    type: 'radio',
  };

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // private ref
    this._rcCheckbox = null;
  }

  focus() {
    this._rcCheckbox.focus();
  }

  blur() {
    this._rcCheckbox.blur();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.radioGroup, nextContext.radioGroup)
    );
  }

  render() {
    const { context, props } = this;
    const {
      iistyle,
      prefixCls,
      className,
      contentClass,
      children,
      style,
      ...restProps
    } = props;
    const { radioGroup } = context;

    let radioProps = { ...restProps };
    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value === radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    const wrapperClassString = cx(
      `${prefixCls}-wrapper`,
      iistyle,
      {
        [`${prefixCls}-wrapper-checked`]: radioProps.checked,
        [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
      },
      className
    );

    return (
      <label
        className={wrapperClassString}
        style={style}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}>
        <RcCheckbox
          {...radioProps}
          prefixCls={prefixCls}
          ref={node => {
            this._rcCheckbox = node;
          }}
        />
        {children !== undefined ? (
          <span className={contentClass}>{children}</span>
        ) : null}
      </label>
    );
  }
}

export default Radio;
