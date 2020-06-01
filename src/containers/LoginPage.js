import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Form, Field} from 'react-final-form';
import styled from 'styled-components';

import {authenticate} from 'src/store/actions/auth';
import LabeledInput from 'src/components/LabeledInput';
import Button from 'src/components/Button';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormStyled = styled.div`
  width: 520px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const ErrorBox = styled.div`
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  padding: 11px 10px 20px 42px;
  margin-bottom: 20px;
  position: relative;

  h4 {
    color: #cf2c00;
    margin: 0 0 10px 0;
    font-size: 18px;
    line-height: 30px;
  }
  p {
    margin: 0;
    color: #cf2c00;
    opacity: 0.5;
    line-height: 20px;
  }
`;

const ErrorBoxIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 13px;
`;

function LoginPage({history}) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const errorText = useSelector((state) => (state.auth.error ? JSON.stringify(state.auth.error) : null));
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn, history]);

  function onSubmit({login, sublogin, password}) {
    if (!loading) {
      dispatch(
        authenticate({
          login,
          sublogin,
          password,
        })
      );
    }
  }

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = true;
    }
    if (!values.password || /[а-яА-ЯЁё\s]+$/.test(values.password)) {
      errors.password = true;
    }

    return errors;
  };

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({errors, handleSubmit, submitting, values}) => (
          <form onSubmit={handleSubmit}>
            <FormStyled>
              {errorText && (
                <ErrorBox>
                  <ErrorBoxIcon src="/icons/meh.svg" alt="" />
                  <h4>Вход не вышел</h4>
                  <p>{errorText}</p>
                </ErrorBox>
              )}
              <Field name="login">
                {({input, meta}) => (
                  <div>
                    <LabeledInput {...input} error={meta.error && meta.touched} label="Логин" />
                  </div>
                )}
              </Field>
              <Field name="sublogin">
                {({input, meta}) => (
                  <div>
                    <LabeledInput {...input} error={meta.error && meta.touched} label="Сублогин" />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({input, meta}) => (
                  <div>
                    <LabeledInput {...input} error={meta.error && meta.touched} label="Пароль" />
                  </div>
                )}
              </Field>

              <div className="buttons">
                <Button type="submit" text="Отправить" loading={loading || false} disabled={!!Object.keys(errors).length} />
              </div>
            </FormStyled>
          </form>
        )}
      />
    </Wrapper>
  );
}

export default withRouter(LoginPage);
