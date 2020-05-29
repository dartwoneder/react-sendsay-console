import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import React from 'react';

import Header from 'src/components/Header';

export default function PrivateRoute({children, ...rest}) {
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
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
