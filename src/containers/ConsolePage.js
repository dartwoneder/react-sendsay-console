import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Resizable} from 're-resizable';
import styled from 'styled-components';

import Footer from 'src/components/Footer';
import Wrapper from 'src/components/Wrapper';
import EditorPane from 'src/components/EditorPane';
import {requestRemoveAll, requestSend} from 'src/store/actions/requests';
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
  const defaultRequest = {
    action: 'sys.settings.get',
    list: ['about.id'],
  };
  const requests = useSelector((state) => {
    console.log('state.requests.history', state.requests.history);
    return state.requests.history;
  });

  let [format, setFormat] = useState(false);
  let [lastResponse, setLastResponse] = useState(requests[0] || {response: {}, request: defaultRequest});

  const [requestBody, setRequestBody] = useState(lastResponse.request);
  const [responseBody, setResponseBody] = useState(lastResponse.response);

  useEffect(() => {
    if (requests.length) {
      setLastResponse(requests[0]);
    }
  }, [requests]);

  useEffect(() => {
    setResponseBody(lastResponse.response);
    setRequestBody(lastResponse.request);
  }, [lastResponse]);

  const onSendRequest = () => {
    dispatch(requestSend(requestBody));
  };

  const onClearHistory = () => {
    dispatch(requestRemoveAll());
  };

  const onRequestClick = (request) => {
    setLastResponse(request);
  };

  const onFormat = () => {
    setFormat(true);
    //event loop hack to return format back to false state and trigger formatting
    setTimeout(() => setFormat(false), 0);
  };
  console.log('lastResponse', lastResponse);

  return (
    <Wrap>
      <RequestsHistory requests={requests} onClick={onRequestClick} onClearHistory={onClearHistory} />
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
          <EditorPane label="Запрос" json={requestBody} onChange={setRequestBody} format={format} hasError={false} />
        </ResizableLeft>
        <ResizableRight>
          <EditorPane label="Ответ" disabled json={responseBody} hasError={lastResponse?.error} />
        </ResizableRight>
      </Content>
      <Footer onFormat={onFormat} onSendRequest={onSendRequest} />
    </Wrap>
  );
}
