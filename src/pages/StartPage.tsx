import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultBtn from 'components/DefaultBtn';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;
const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 500px;
  /* background-color: yellow; */

  @media (max-width: 768px) {
    height: 40vh;
  }
`;
const HeaderLogoImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: pink;
`;
const HeaderTitle = styled.h1`
  margin-top: 0;
  font-size: 2.25rem;
  font-weight: 700;
`;
const HeaderSubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;
const MainContainer = styled.section`
  height: 360px;
  /* background-color: blue; */

  @media (max-width: 768px) {
    height: 30vh;
  }
`;
const MainContents = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1% 3%;
  list-style: none;
  /* background-color: red; */
`;
const MainContentItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 80%;
  margin: 1%;
  /* background-color: pink; */
`;
const ContentItemImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: pink;
`;
const ContentItemText = styled.p`
  font-size: 1rem;
`;
const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 360px;
  margin-top: 10%;
  /* background-color: gray; */

  @media (max-width: 768px) {
    height: 30vh;
  }
`;
const BtnContainer = styled.div`
  width: 70%;
  height: 30%;
  min-width: 230px;
  max-width: 400px;
  min-height: 50px;
  max-height: 80px;
  /* background-color: pink; */
`;

const StartPage = () => {
  const navigator = useNavigate();

  const onClickStart = () => {
    navigator('/questions');
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderLogoImg />
        <HeaderSubTitle>나만의 카드 만들기</HeaderSubTitle>
        <HeaderTitle>CaKku 💌</HeaderTitle>
      </HeaderContainer>
      <MainContainer>
        <MainContents>
          <MainContentItem>
            <ContentItemImg />
            <ContentItemText>
              질문은 8개
              <br />
              1분이면 OK!
            </ContentItemText>
          </MainContentItem>
          <MainContentItem>
            <ContentItemImg />
            <ContentItemText>
              몇 가지 정보면
              <br />
              나만의 카드 완성
            </ContentItemText>
          </MainContentItem>
          <MainContentItem>
            <ContentItemImg />
            <ContentItemText>
              친구에게
              <br />
              공유도 손쉽게!
            </ContentItemText>
          </MainContentItem>
        </MainContents>
      </MainContainer>
      <FooterContainer>
        <BtnContainer>
          <DefaultBtn style="active" text="시작하기" onClick={onClickStart} />
        </BtnContainer>
      </FooterContainer>
    </Container>
  );
};

export default StartPage;
