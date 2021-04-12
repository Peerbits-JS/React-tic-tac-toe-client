import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from '../components/BlankSymbol';

const XSymbol = (props) => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <line x1="10" y1="10" x2="46" y2="46" stroke="#3b8010" strokeWidth="15" />
        <line x1="10" y1="46" x2="46" y2="10" stroke="#3b8010" strokeWidth="15" />
      </svg>
    </Symbol>
  );
};

XSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default XSymbol;
