import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  color: #0d0d0d;
  display: flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
  outline: none;
  position: relative;
  border: 2px solid transparent;
  border-radius: 7px;
  padding: 0 4px;
  &:hover,
  &:focus {
    color: #0055fb;
    border-color: #45a5ff;

    path {
      stroke: #0055fb;
    }
  }
  &:active {
    color: #0055fb;
  }
`;

export default function TransparentButton({onClick, children, className}) {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

TransparentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
