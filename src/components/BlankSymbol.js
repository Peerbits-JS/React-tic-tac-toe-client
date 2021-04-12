import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Symbol = styled.div`
  background-color: white;
  border: 1px dotted #7ab63c;
  height: 80px;
  margin: 0px;
  transition: background-color .5s ease;
  width: 80px;
`;

const BlankSymbol = (props) => {
  return <Symbol onClick={() => props.addSymbol(props.turn)}></Symbol>;
};

BlankSymbol.propTypes = {
  addSymbol: PropTypes.func.isRequired
};

export default BlankSymbol;
