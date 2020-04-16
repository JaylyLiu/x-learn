import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends PureComponent {
  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  state = {
    value: this.props.defaultValue !== undefined ? this.props.defaultValue : '',
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      !this.props.defaultValue &&
      nextProps.defaultValue !== undefined &&
      nextProps.defaultValue !== '' &&
      this.state.value === ''
    ) {
      this.setState({
        value: nextProps.defaultValue,
      });
      return;
    }

    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({
        value: nextProps.defaultValue,
      });
    }
  }

  getChildContext() {
    return {
      radioGroup: {
        onChange: this.onChange,
        value: this.state.value,
        disabled: this.props.disabled,
        name: this.props.name,
      },
    };
  }

  onChange = ev => {
    const lastValue = this.state.value;
    const { value } = ev.target;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }

    const onChange = this.props.onChange;
    if (onChange && value !== lastValue) {
      onChange(ev);
    }
  };

  render() {
    const { value } = this.state;
    const { children, className } = this.props;
    return (
      <div className={className}>
        {React.Children.map(
          children,
          (item, key) =>
            item &&
            React.cloneElement(item, {
              key,
              defaultChecked: value === item.props.value,
            })
        )}
      </div>
    );
  }
}

RadioGroup.childContextTypes = {
  radioGroup: PropTypes.any,
};

export default RadioGroup;
