import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'src/components/Button';
import Wrapper from 'src/components/Wrapper';

const FooterStyled = styled.footer`
  height: 70px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const WrapperStyled = styled(Wrapper)`
  display: flex;
  align-items: center;
`;
const FooterInfo = styled.div`
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 16px;
`;
const FormatBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  img {
    margin-right: 10px;
  }
`;

export default function Footer({onSendRequest, onFormat}) {
  return (
    <FooterStyled>
      <WrapperStyled>
        <Button onClick={onSendRequest} text="Отправить" />
        <FooterInfo>@link-to-your-github</FooterInfo>
        <FormatBtn onClick={onFormat}>
          <img src="icons/format.svg" />
          Форматировать
        </FormatBtn>
      </WrapperStyled>
    </FooterStyled>
  );
}

Footer.propTypes = {
  onSendRequest: PropTypes.func.isRequired,
  onFormat: PropTypes.func.isRequired,
};
