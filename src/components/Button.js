import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  color: #ffffff;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  border-radius: 5px;
  border: none;
  display: block;
  height: 40px;
  min-width: 110px;
  font-size: 16px;
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  position: relative;
  &:focus {
    background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:disabled {
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
`;

const ButtonText = styled.span`
  visibility: ${(props) => (props.loading ? 'hidden' : 'visible')};
`;

export default function Button({type = 'submit', text, disabled, loading, onClick}) {
  return (
    <ButtonStyled type={type} disabled={disabled} onClick={loading ? () => {} : onClick}>
      <ButtonText loading={loading}>{text}</ButtonText>
      <Loader loaded={!loading} color={'#fff'} lines={8} width={3} radius={6} corners={2} scale={0.9} length={6} />
    </ButtonStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
