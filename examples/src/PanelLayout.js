import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '../../src';

function PrivateLayout(props) {
  const { title } = props;

  return (
    <div style={{ width: 800, margin: '100px auto' }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title || 'Unnamed'}</h3>
        </div>
        <div className="panel-body">
          <Slot name="content-wrapper">
            <Slot name="content" style={{ padding: 40 }} />
          </Slot>
        </div>
        <Slot name="footer" className="panel-footer">
          This footer is defined on the <strong>Layout</strong>
        </Slot>
      </div>
    </div>
  );
}

PrivateLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrivateLayout;
