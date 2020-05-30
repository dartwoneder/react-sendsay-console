import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import styled from 'styled-components';

import Wrapper from 'src/components/Wrapper';

const Pill = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0 10px 0 0;
  padding: 0 10px 0 12px;
  font-size: 16px;
  color: #0d0d0d;
  cursor: pointer;
  img {
    margin-left: 11px;
  }
`;

const StatusIcons = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #30b800;
  border: 1px solid rgb(40, 143, 7);
  margin-right: 5px;
  background: ${(props) => (props.error ? '#CF2C00' : '#30b800')};
  border-color: ${(props) => (props.error ? 'rgb(160, 38, 4)' : 'rgb(40, 143, 7)')};
`;

export default function DropdownPill({text, hasError, onClick}) {
  return (
    <Pill onClick={onClick}>
      <StatusIcons error={hasError} />
      {text} <img src="/icons/dots.svg" />
    </Pill>
  );
}

DropdownPill.propTypes = {
  text: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
