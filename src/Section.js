/* eslint no-unreachable: off, react/require-render-return: off */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Section extends PureComponent {

  static displayName = 'Section';

  static propTypes = {
    slot: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    throw new Error('You must only use <Section> inside a <Page>');
  }

}

export default Section;
