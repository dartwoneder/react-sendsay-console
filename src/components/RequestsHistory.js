import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from 'src/components/Wrapper';
import DropdownPill from 'src/components/DropdownPill';

const RequstHistoryStyled = styled.div`
  position: relative;
`;
const WrapperStyled = styled(Wrapper)`
  height: 50px;
  background: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;
const HistoryList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 55px;
  position: absolute;
  overflow: hidden;
`;
const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  width: 15px;
  height: 49px;
  right: 50px;
  top: 0;
  background: linear-gradient(269.98deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
`;

const ClearHistoryBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 48px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  background: url(/icons/cross.svg) no-repeat 50% 50% #f6f6f6;
  cursor: pointer;
`;

export default function RequestsHistory({requests, onMakeRequest, onCopy, onRemove, onClearHistory}) {
  const container = useRef();
  const onWheel = (event) => {
    const containerScrollPosition = container.current.scrollLeft;
    container.current.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: 'smooth',
    });
  };

  useEffect(() => {
    container.current.scrollTo({
      top: 0,
      left: 0,
      behaviour: 'smooth',
    });
  }, [requests]);

  return (
    <RequstHistoryStyled>
      <WrapperStyled onWheel={onWheel} ref={container}>
        <HistoryList>
          {requests.map((item) => (
            <DropdownPill
              key={item.id}
              text={item.name}
              onMakeRequest={() => onMakeRequest(item)}
              onCopy={() => onCopy(item)}
              onRemove={() => onRemove(item)}
              hasError={item.error}
            />
          ))}
        </HistoryList>
      </WrapperStyled>
      <Overlay />
      <ClearHistoryBtn onClick={onClearHistory} />
    </RequstHistoryStyled>
  );
}

RequestsHistory.propTypes = {
  requests: PropTypes.array.isRequired,
  onMakeRequest: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onClearHistory: PropTypes.func.isRequired,
};
