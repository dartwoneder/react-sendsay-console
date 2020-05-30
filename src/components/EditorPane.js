import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JSONEditor from 'src/components/JSONEditor';

const Label = styled.div`
  color: #999;
  font-size: 12px;
  position: relative;
  z-index: 2;
`;
const Wrap = styled.div`
  height: 100%;
  position: relative;
`;
const JSONEditorStyled = styled(JSONEditor)`
  border: ${(props) => (props.hasError ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  box-shadow: ${(props) => (props.hasError ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
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
`;

export default function EditorPane({label, disabled = false}) {
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

  useEffect(() => {
    const textarea = textInput.current.htmlElementRef.querySelector('.jsoneditor-text');
    if (disabled) {
      textarea.setAttribute('disabled', true);
    } else {
      textarea.removeAttribute('disabled');
    }
  }, [disabled]);

  return (
    <Wrap>
      <Label>
        {label}
        {/*<button onClick={onFormat}>onFormat</button>*/}
      </Label>

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

EditorPane.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
