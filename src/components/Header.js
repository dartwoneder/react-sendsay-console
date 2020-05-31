import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from 'src/store/actions/auth';
import Wrapper from 'src/components/Wrapper';
import TransaprentButton from 'src/components/TransaprentButton';

const HeaderStyled = styled.header`
  height: 50px;
  background: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  img {
    margin-right: 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  li {
    margin: 0 0 0 33px;
    display: flex;
    align-items: center;
  }
`;
const LogoutBtn = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin: 0 0 0 11px;
  }
`;

const FullScreenBtn = styled.img`
  cursor: pointer;
`;

const UserInfoBtn = styled.div`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 15px;
  height: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  i {
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    &:before,
    &:after {
      content: '';
      width: 3px;
      height: 3px;
      background: rgba(0, 0, 0, 0.2);
      display: block;
      border-radius: 100%;
      margin: 2px 0;
    }
    &:after {
    }
  }
`;

export default function Header() {
  const dispatch = useDispatch();
  const doLogout = () => dispatch(logout());
  const login = useSelector((state) => state.auth.login);
  const sublogin = useSelector((state) => state.auth.sublogin);

  return (
    <HeaderStyled>
      <WrapperStyled>
        <HeaderInfo>
          <img src="/icons/logo.svg" alt="" />
          API-консолька
        </HeaderInfo>
        <nav>
          <NavList>
            <li>
              <UserInfoBtn>
                {login}
                <i />
                {sublogin}
              </UserInfoBtn>
            </li>
            <li onClick={doLogout}>
              <LogoutBtn>
                Выйти
                <img src="/icons/log-out.svg" alt="" />
              </LogoutBtn>
            </li>
            <li>
              <TransaprentButton src="/icons/full-screen.svg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6"
                    stroke="#0D0D0D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </TransaprentButton>
            </li>
          </NavList>
        </nav>
      </WrapperStyled>
    </HeaderStyled>
  );
}
