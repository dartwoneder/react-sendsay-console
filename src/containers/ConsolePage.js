import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Resizable} from 're-resizable';
import styled from 'styled-components';

import Footer from 'src/components/Footer';
import Wrapper from 'src/components/Wrapper';
import EditorPane from 'src/components/EditorPane';
import api from 'src/helpers/sendsay';
import {requestSend} from 'src/store/actions/requests';
import RequestsHistory from 'src/components/RequestsHistory';

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fff;
`;
const Content = styled(Wrapper)`
  flex: 1;
  height: 100%;
  display: flex;
  width: 100%;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const ResizableLeft = styled(Resizable)`
  height: calc(100% - 15px);
  padding-right: 5px;
`;
const ResizableRight = styled.div`
  width: 100%;
  height: calc(100% - 15px);
  min-width: 1px;
  padding-left: 5px;
`;

export default function ConsolePage() {
  const dispatch = useDispatch();
  const [requestBody, setRequestBody] = useState({action: 'sys.settings.get', list: ['about.id']});

  const lastResponse = useSelector((state) => state.requests.history[0]);

  const onSendRequest = () => {
    dispatch(requestSend(requestBody));
  };

  return (
    <Wrap>
      <RequestsHistory />
      <Content>
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
            height: 'calc(100% - 15px)',
          }}
          handleStyles={{
            right: {
              width: '10px',
              background: "url('/icons/dots.svg') no-repeat 50% 50%",
            },
          }}
          maxWidth="100%"
          minWidth="1"
        >
          <EditorPane label="Запрос" json={requestBody} onChange={setRequestBody} />
        </ResizableLeft>
        <ResizableRight>
          <EditorPane label="Ответ" disabled json={lastResponse} />
        </ResizableRight>
      </Content>
      <Footer
        onFormat={() => {
          console.log('onFormat');
        }}
        onSendRequest={onSendRequest}
      />
    </Wrap>
  );
}
