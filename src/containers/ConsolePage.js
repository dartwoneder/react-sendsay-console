import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Footer from 'src/components/Footer';
import Wrapper from 'src/components/Wrapper';

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
      <Content>consl</Content>
      <Footer>footer</Footer>
    </Wrap>
  );
}
