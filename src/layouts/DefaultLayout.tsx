import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    min-width: 390px;
    justify-content: center;
    align-items: center;
    background-color: green;
`;
const ChildContainer = Styled.div`
    width: 768px;
    height: 100%;
    max-width: 768px;
    background-color: #fff;
`;

interface Props {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <Container>
      <ChildContainer>{children}</ChildContainer>
    </Container>
  );
};

export default DefaultLayout;
