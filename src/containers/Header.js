import React, {useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {logout} from 'src/store/actions/auth';
import {requestRemoveAll} from 'src/store/actions/requests';
import {AppContext} from 'src/App';
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
  const doLogout = () => {
    dispatch(requestRemoveAll());
    dispatch(logout());
  };
  const login = useSelector((state) => state.auth.login);
  const sublogin = useSelector((state) => state.auth.sublogin);
  const appContext = useContext(AppContext);

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
              <TransaprentButton src="/icons/full-screen.svg" onClick={appContext.toggleFullScreen}>
                {appContext.isFullScreen && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6H4C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4V1M14 1V4C14 4.53043 14.2107 5.03914 14.5858 5.41421C14.9609 5.78929 15.4696 6 16 6H19M19 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V19M6 19V16C6 15.4696 5.78929 14.9609 5.41421 14.5858C5.03914 14.2107 4.53043 14 4 14H1"
                      stroke="#0D0D0D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {!appContext.isFullScreen && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6"
                      stroke="#0D0D0D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </TransaprentButton>
            </li>
          </NavList>
        </nav>
      </WrapperStyled>
    </HeaderStyled>
  );
}
