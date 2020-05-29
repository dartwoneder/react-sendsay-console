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
  color: #0d0d0d;
  padding-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #0d0d0d;
`;

export default function LabeledInput({value, label, onChange}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
}

LabeledInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
