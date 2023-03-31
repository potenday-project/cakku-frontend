import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 40px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
`;
const DisabledBtn = styled.button`
  width: 100%;
  height: 100%;
  background: #655d60;
  border: 1px solid #655d60;
  border-radius: 40px;
`;
const ClearBtn = styled.button`
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px solid #655d60;
  border-radius: 40px;
`;

interface Props {
  style: 'active' | 'disabled' | 'clear';
  text: string;
  onClick: () => void;
}
const KEY_COLOR = '#DB648F';
const GRAY_COLOR = '#655D60';

export default function DefaultBtn({ style, text, onClick }: Props) {
  const styleObj = {
    backgroundColor: '#DB648F',
    borderColor: '#DB648F'
  };
  switch (style) {
    case 'disabled':
      styleObj.backgroundColor = GRAY_COLOR;
      styleObj.borderColor = GRAY_COLOR;
      break;
    case 'clear':
      styleObj.backgroundColor = '#fff';
      styleObj.borderColor = GRAY_COLOR;
      break;
    case 'active':
      styleObj.backgroundColor = KEY_COLOR;
      styleObj.borderColor = KEY_COLOR;
  }

  return (
    <BtnContainer style={styleObj} onClick={onClick}>
      {text}
    </BtnContainer>
  );
}
