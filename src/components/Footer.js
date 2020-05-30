import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from 'src/store/actions/auth';
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
  img {
    margin-right: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <WrapperStyled>
        <Button onClick={() => {}} text="Отправить" />
        <FooterInfo>@link-to-your-github</FooterInfo>
        <FormatBtn onClick={() => {}}>
          <img src="icons/format.svg" />
          Форматировать
        </FormatBtn>
      </WrapperStyled>
    </FooterStyled>
  );
}
