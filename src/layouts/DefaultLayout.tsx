import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-width: 390px;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
const ChildContainer = styled.div`
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
