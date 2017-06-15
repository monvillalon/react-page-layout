import React from 'react';
import PropTypes from 'prop-types';

function Radios(props) {
  const { name, value, options, disabled, onChange } = props;
  return (
    <div>
      {options.map(option => (
        <div className="radio" key={`${option.value}`}>
          <label>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={disabled}
              onChange={onChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  )
}

Radios.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
     label: PropTypes.string.isRequired,
     value: PropTypes.any.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

Radios.defaultProps = {
  disabled: false,
};

export default Radios;

