import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '../../src';

function PrivateLayout(props) {
  const { title } = props;

  return (
    <div className="layout">
      <Slot name="header" className="layout-header" component="header">
        <h1>{title || 'Unnamed'}</h1>
      </Slot>
      <hr />
      <Slot name="main" className="layout-main" component="main">
        <Slot name="sidebar" className="layout-sidebar" />
        <Slot name="content-wrapper" className="layout-content-wrapper">
          <Slot name="content" className="layout-content" />
        </Slot>
      </Slot>
      <Slot name="footer" className="layout-footer">
        This footer is defined on the <strong>Layout</strong>
      </Slot>
    </div>
  );
}

PrivateLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrivateLayout;
