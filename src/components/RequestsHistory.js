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
`;
const HistoryList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default function RequestsHistory() {
  return (
    <WrapperStyled>
      <HistoryList>
        {['track.get', 'track.get', 'track.get'].map((item) => (
          <DropdownPill text={item} />
        ))}
      </HistoryList>
    </WrapperStyled>
  );
}

RequestsHistory.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
