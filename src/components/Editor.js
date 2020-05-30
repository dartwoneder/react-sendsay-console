import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JSONEditor from 'src/components/JSONEditor';

import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from 'src/store/actions/auth';
import Button from 'src/components/Button';
import Wrapper from 'src/components/Wrapper';

const Label = styled.div`
  color: #999;
  font-size: 12px;
`;
const Wrap = styled.div`
  padding: 15px 0;
  height: 100%;
`;
const JSONEditorStyled = styled(JSONEditor)`
  .jsoneditor-menu {
    display: none;
  }
  .jsoneditor-validation-errors-container {
    display: none;
  }
  .jsoneditor {
    border: 0;
  }
  .jsoneditor-outer {
    margin: 0 !important;
    padding: 0 !important;
  }
  border: ${(props) => (props.hasError ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  border-width: 1px;
  border-style: solid;
  height: 100%;
`;

export default function Editor() {
  const [hasError, setHasError] = useState(false);
  const textInput = useRef();
  const onChange = () => {
    setHasError(false);
  };
  const onError = () => {
    setHasError(true);
  };

  const onFormat = () => {
    textInput.current.jsonEditor.format();
  };

  return (
    <Wrap hasError={hasError}>
      {/*<button onClick={onFormat}>onFormat</button>*/}
      <JSONEditorStyled
        ref={textInput}
        value={{
          the: 'men',
          that: 'landed',
          on: 'the',
          moon: 'were',
          maybe: 2,
          i: 'think',
          probably: ['neil armstrong', 'buzz aldrin'],
          am_i_right: true,
        }}
        navigationBar={false}
        search={false}
        statusBar={false}
        mode="code"
        hasError={hasError}
        onChange={onChange}
        onError={onError}
      />
    </Wrap>
  );
}

Editor.propTypes = {
  label: PropTypes.string.isRequired,
};
