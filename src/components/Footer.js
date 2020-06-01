import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'src/components/Button';
import Wrapper from 'src/components/Wrapper';
import TransparentButton from 'src/components/TransaprentButton';

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
  a {
    color: #999;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
      color: #000;
    }
  }
`;
const FormatBtn = styled(TransparentButton)`
  user-select: none;
  svg {
    margin-right: 10px;
  }
`;

export default function Footer({onSendRequest, onFormat, loading}) {
  return (
    <FooterStyled>
      <WrapperStyled>
        <Button onClick={onSendRequest} loading={loading} text="Отправить" />
        <FooterInfo>
          <a target="_blank" href="https://github.com/dartwoneder/react-sendsay-console">
            @on-github
          </a>
        </FooterInfo>
        <FormatBtn onClick={onFormat}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path d="M21 10H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 6H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 18H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          <span>Форматировать</span>
        </FormatBtn>
      </WrapperStyled>
    </FooterStyled>
  );
}

Footer.propTypes = {
  onSendRequest: PropTypes.func.isRequired,
  onFormat: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
