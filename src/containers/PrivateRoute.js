import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import React, {useEffect} from 'react';

import {authenticateCheck} from 'src/store/actions/auth';
import Header from 'src/containers/Header';

export default function PrivateRoute({children, ...rest}) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
  useEffect(() => {
    dispatch(authenticateCheck());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={({location}) => {
        return isLoggedIn ? (
          <>
            <Header />
            {children}
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        );
      }}
    />
  );
}
