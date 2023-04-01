import React from 'react';
import styled from 'styled-components';
import { BTN_KEY_COLOR, BTN_SUB_COLOR } from 'lib/constant';

const BtnContainer = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 10px;
  font-size: 1rem;
`;

interface Props {
  btnType?: 'active' | 'clear' | 'none-border';
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

const NextBtn = ({ btnType, text, isActive, onClick }: Props) => {
  return (
    <>
      {(btnType === undefined || btnType === 'active') && (
        <BtnContainer
          style={{
            backgroundColor: BTN_KEY_COLOR,
            borderColor: BTN_KEY_COLOR,
            color: '#fff'
          }}
          onClick={onClick}
        >
          {text}
        </BtnContainer>
      )}
      {btnType === 'clear' && (
        <BtnContainer
          style={{
            backgroundColor: '#fff',
            color: 'black',
            border: '1px solid'
          }}
          onClick={onClick}
        >
          {text}
        </BtnContainer>
      )}
      {btnType === 'none-border' && (
        <BtnContainer
          style={{ backgroundColor: '#fff', color: 'gray' }}
          onClick={onClick}
        >
          {text}
        </BtnContainer>
      )}
    </>
  );
};
export default NextBtn;
