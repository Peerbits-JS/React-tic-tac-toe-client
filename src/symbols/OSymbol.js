import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from '../components/BlankSymbol';

const OSymbol = (props) => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <circle cx={28} cy={28} r={15} stroke="#1e88e5" strokeWidth="10" fill="none" />
      </svg>
    </Symbol>
  );
};

OSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default OSymbol;
