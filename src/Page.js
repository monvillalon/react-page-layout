import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isPlainObject from 'lodash.isplainobject';
import isArray from 'lodash.isarray';
import Section from './Section';
import LayoutContext from './LayoutContext';

class Page extends PureComponent {

  static propTypes = {
    layout: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    getLayout: PropTypes.func.isRequired,
  };

  getSections(parent) {
    if (isPlainObject(parent)) {
      // Check if the element is a section
      if (parent.type && parent.type.displayName === 'Section') {
        return { [parent.props.slot]: parent };
      }
      return {};
    } else if (isArray(parent)) {
      let sections = [];
      for (let i = 0, c = parent.length; i < c; i += 1) {
        sections = Object.assign({}, sections, this.getSections(parent[i]));
      }
      return sections;
    }
    return {};
  }

  getLayout(name) {
    const layout = this.context.getLayout(name);
    const children = this.props.children;
    const props = { ...this.props };
    delete props.layout;
    delete props.children;
    return React.createElement(layout, props, children);
  }

  render() {
    const layout = this.getLayout(this.props.layout);
    const sections = this.getSections(this.props.children);

    if (!layout) {
      throw new Error(`No layout found named: '${this.props.layout}'`);
    }

    return (
      <LayoutContext sections={sections}>
        {layout}
      </LayoutContext>
    );
  }

}

export default Page;
