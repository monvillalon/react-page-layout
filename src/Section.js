/* eslint no-unreachable: off, react/require-render-return: off */
import React, { PureComponent, PropTypes } from 'react';

class Section extends PureComponent {

  static propTypes = {
    slot: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    throw new Error('You must only use <Section> inside a <Page>');
  }

}

export default Section;
