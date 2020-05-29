import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authenticate, test2} from 'src/store/actions/auth';

function LoginPage() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('alfxyzdev@gmail.com');
  const [sublogin, setSubLogin] = useState('test');
  const [password, setPassword] = useState('Rmc$L>AwG(');
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };
  const doTest = () => {
    dispatch(test2());
  };

  function onSubmit(event) {
    event.preventDefault();
    doLogin();
  }

  return (
    <div>
      LoginPage
      {isLoggedIn && 'you are in'}
      {!isLoggedIn && (
        <form onSubmit={onSubmit} action="/">
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
          <input type="text" value={sublogin} onChange={(e) => setSubLogin(e.target.value)} />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

          <input type="submit" value="doLogin" />
        </form>
      )}
      <button onClick={doTest}>test</button>
    </div>
  );
}

export default LoginPage;
