import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import JSONEditor from 'src/components/JSONEditor';

const Label = styled.div`
  color: ${(props) => (props.hasError ? '#CF2C00' : '#999')};
  font-size: 12px;
  position: relative;
  z-index: 2;
  padding-bottom: 3px;
`;
const Wrap = styled.div`
  height: 100%;
  position: relative;
`;
const JSONEditorStyled = styled(JSONEditor)`
  border: ${(props) => (props.hasError ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)')};
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
  .jsoneditor-text {
    padding: 10px;
    font-size: 14px;
  }
`;

export default function EditorPane({label, json, onChange, disabled = false}) {
  const [hasError, setHasError] = useState(false);
  const textInput = useRef();
  const onChangeText = (data) => {
    console.log('data', data);
    onChange(data);
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
      <Label hasError={hasError}>
        {label}:{/*<button onClick={onFormat}>onFormat</button>*/}
      </Label>

      <JSONEditorStyled
        ref={textInput}
        value={json}
        navigationBar={false}
        search={false}
        statusBar={false}
        mode="code"
        hasError={hasError}
        onChange={onChangeText}
        onError={onError}
      />
    </Wrap>
  );
}

EditorPane.propTypes = {
  label: PropTypes.string.isRequired,
  json: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
