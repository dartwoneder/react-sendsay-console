import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: block;
  padding-bottom: 20px;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.error ? '#CF2C00' : '#0d0d0d')};
  padding-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.error ? '#CF2C00' : '#0d0d0d')};
  border-color: ${(props) => (props.error ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)')};
  box-shadow: ${(props) => (props.error ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};

  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default function LabeledInput({value, label, error, onChange}) {
  return (
    <Wrapper>
      <Label error={error}>{label}</Label>
      <Input type="text" error={error} value={value} onChange={onChange} />
    </Wrapper>
  );
}

LabeledInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
