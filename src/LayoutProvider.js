import { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';

class LayoutProvider extends PureComponent {

  static propTypes = {
    layouts: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    getLayout: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      getLayout: this.getLayout,
    };
  }

  getLayout = (name) => {
    return this.props.layouts[name];
  };

  render() {
    return Children.only(this.props.children);
  }

}

export default LayoutProvider;
