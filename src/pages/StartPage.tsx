import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NextBtn from 'components/button/NextBtn';

const Container = styled.div`
  width: 100%;
`;
const HeaderText = styled.p`
  margin: 10% 7%;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.75rem;

  @media (max-width: 820px) {
    margin-top: 15%;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media (max-height: 600px) {
    margin: 5% 7%;
  }
`;
const MainText = styled.h1`
  /* margin-left: 7%; */

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;

  @media (min-width: 769px) and (min-height: 601px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    font-size: 4rem;
  }
`;
const BtnContainer = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 50%;
  min-width: 250px;
  max-width: 500px;
  height: 5%;
  min-height: 56px;
  max-height: 76px;

  @media (max-height: 800px) {
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StartPage = () => {
  const navigator = useNavigate();

  const onClickStart = () => {
    navigator('/questions');
  };

  return (
    <Container>
      <HeaderText>
        카드를 손쉽게 만들고
        <br />
        행복한 순간을 함께 하고 싶은
        <br />
        소중한 사람에게 공유해 보세요
      </HeaderText>
      <MainText>
        Happiness
        <br />
        Only
        <br />
        Real
        <br />
        When
        <br />
        Shared
      </MainText>
      <BtnContainer>
        <NextBtn text="시작하기" onClick={onClickStart} />
      </BtnContainer>
    </Container>
  );
};

export default StartPage;
