import { PureComponent, PropTypes, Children } from 'react';

class LayoutContext extends PureComponent {

  static propTypes = {
    sections: PropTypes.objectOf(PropTypes.element).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    getSection: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      getSection: this.getSection.bind(this),
    };
  }

  getSection(slot) {
    return this.props.sections[slot] || false;
  }

  render() {
    return Children.only(this.props.children);
  }

}

export default LayoutContext;
