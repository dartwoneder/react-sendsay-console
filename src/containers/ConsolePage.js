import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Footer from 'src/components/Footer';
import Wrapper from 'src/components/Wrapper';
import Editor from 'src/components/Editor';

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Content = styled(Wrapper)`
  flex: 1;
`;

export default function ConsolePage() {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Content>
        <Editor label="Запрос" />
      </Content>
      <Footer>footer</Footer>
    </Wrap>
  );
}
