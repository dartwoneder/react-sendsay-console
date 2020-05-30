import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import styled from 'styled-components';

import Wrapper from 'src/components/Wrapper';
import DropdownPill from 'src/components/DropdownPill';

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
`;

const ClearHistoryBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background: #f6f6f6;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  background: url('/icons/cross.svg') no-repeat 50% 50%;
  cursor: pointer;
`;

export default function RequestsHistory({requests, onClick, onClearHistory}) {
  return (
    <WrapperStyled>
      <HistoryList>
        {requests.map((item) => {
          console.log('e', item);
          return <DropdownPill key={item.id} text={item.name} onClick={onClick} hasError={item.error} />;
        })}
      </HistoryList>
      <ClearHistoryBtn onClick={onClearHistory} />
    </WrapperStyled>
  );
}

RequestsHistory.propTypes = {
  requests: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onClearHistory: PropTypes.func.isRequired,
};
