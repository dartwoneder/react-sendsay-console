import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import PropTypes, {func} from 'prop-types';
import {Resizable} from 're-resizable';

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
  // padding: 15px 0;
  height: 100%;
  display: flex;
  width: 100%;
  overflow: hidden;
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

const ResizableLeft = styled(Resizable)`
  height: 100%;
  padding-right: 5px;
`;
const ResizableRight = styled.div`
  width: 100%;
  min-width: 1px;
  padding-left: 5px;
`;

function HandleComponent() {
  return (
    <div>
      <div>1</div>
      <div>2</div>
    </div>
  );
}

export default function EditorsPane() {
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
      <ResizableLeft
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        defaultSize={{
          width: '50%',
          height: '100%',
        }}
        handleStyles={{
          right: {
            width: '10px',
            background: "url('/icons/dots.svg') no-repeat 50% 50%",
          },
        }}
        handleComponent={<HandleComponent />}
        maxWidth="100%"
        minWidth="1"
      >
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
      </ResizableLeft>
      <ResizableRight>
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
      </ResizableRight>
    </Wrap>
  );
}

EditorsPane.propTypes = {
  label: PropTypes.string.isRequired,
};
