import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from 'src/store/actions/auth';

const Wrap = styled.header`
  height: 50px;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 15px;
`;

const HeaderInfo = styled.header`
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
    <Wrap>
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
            <FullScreenBtn src="/icons/full-screen.svg" alt="" />
          </li>
        </NavList>
      </nav>
    </Wrap>
  );
}
