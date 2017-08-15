import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slot extends Component {

  static contextTypes = {
    getSection: PropTypes.func.isRequired,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.any, // eslint-disable-line
    wrapper: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    children: PropTypes.node,
  }

  static defaultProps = {
    component: 'div',
    wrapper: undefined,
    className: undefined,
    style: {},
    children: false,
  }

  render() {
    const { className, style, component, wrapper } = this.props;
    const section = this.context.getSection(this.props.name);
    const children = section ? section.props.children : this.props.children;
    const props = { className, style };

    if (!children) {
      return false;
    }

    if (wrapper) {
      return React.cloneElement(wrapper, props, children);
    }

    return React.createElement(component, props, children);
  }

}

export default Slot;
