import React, { useEffect, useState } from 'react';
import getQuestion from 'lib/questions';
import { getInvitationTypes, getInvitationDetailTypes } from 'lib/options';
import { useNavigate } from 'react-router';

import NextBtn from 'components/button/NextBtn';

const QuestionPage = () => {
  // question
  const [idx, setIdx] = useState<number>(1); // 현재 단계
  const [question, setQuestion] = useState<QuestionType>({
    idx: 1,
    title: `반가워요! 어떻게 불러드리면 될까요?`,
    optionType: 'input-text',
    answerLimit: 5
  }); // 질문 객체
  const [options, setOptions] = useState<string[]>([]); // 질문 선택지 리스트
  // answer
  const [answer, setAnswer] = useState<AnswerType>({
    userName: '',
    invitationType: 0,
    invitationDetailType: 0,
    invitationTitle: '',
    cardTemplateItems: []
  }); // 서버로 전달시킬 답변 객체
  const [curValue, setCurValue] = useState<string | number | number[]>(''); // 현재 단계에서의 답변
  const [dynamicText, setDynamicText] = useState<string>(''); // 질문에 동적으로 포함시킬 문자열

  const navigator = useNavigate();

  // 단계가 달라질 때마다 호출
  useEffect(() => {
    // 새로운 질문 가져옴
    const newQuestion = getQuestion(idx - 1, dynamicText);
    setQuestion(newQuestion);
    // 답변 초기화 (단계마다 사용하는 값)
    setCurValue('');
  }, [idx]);

  // 다음 단계 이동
  const moveNextIdx = () => {
    // (1) 인덱스에 맞춰서 정보 저장
    // (2) dynamicText 바꾸기
    switch (idx) {
      case 1:
        if (typeof curValue === 'string') {
          setAnswer(prev => ({ ...prev, userName: curValue }));
          setDynamicText(curValue);
        }
        // 다음 질문의 옵션 값을 가져옴
        setOptions(getInvitationTypes());
        break;
      case 2:
        if (typeof curValue === 'number') {
          setAnswer(prev => ({ ...prev, invitationType: curValue }));
          setDynamicText(options[curValue]);
          // 다음 질문의 옵션 값을 가져옴
          setOptions(getInvitationDetailTypes(curValue));
        }
        break;
      case 3:
        if (typeof curValue === 'number') {
          setAnswer(prev => ({ ...prev, invitationDetailType: curValue }));
          setDynamicText(options[curValue]);
        }
        break;
      case 4:
        if (typeof curValue === 'string') {
          setAnswer(prev => ({ ...prev, invitationTitle: curValue }));
          setDynamicText(curValue);
        }
        break;
      case 5:
        if (typeof curValue === 'object') {
          setAnswer(prev => ({ ...prev, cardTemplateItems: [...curValue] }));
          setOptions(['네 좋아요', '아니요']);
        }
        break;
      case 6:
        if (typeof curValue === 'string' && curValue.length !== 0) {
          setAnswer(prev => ({ ...prev, invitationDate: curValue }));
        }
        break;
      case 7:
        if (typeof curValue === 'string' && curValue.length !== 0) {
          setAnswer(prev => ({ ...prev, invitationTime: curValue }));
        }
        break;
      case 8:
        if (typeof curValue === 'string' && curValue.length !== 0) {
          setAnswer(prev => ({ ...prev, invitationPlace: curValue }));
        }
        break;
      case 9:
        if (typeof curValue === 'string' && curValue.length !== 0) {
          setAnswer(prev => ({ ...prev, cardContent: curValue }));
        }
        break;
      default:
        break;
    }
    setIdx(prev => prev + 1);
  };

  const onSubmit = () => {
    console.log(answer);
    navigator('/result');
  };

  return (
    <>
      <div>{question.title}</div>
      {question.optionType === 'input-text' && (
        <input
          type="text"
          value={curValue as string}
          onChange={e => {
            setCurValue(e.target.value);
          }}
        />
      )}
      {question.optionType === 'input-date' && (
        <input
          type="date"
          value={curValue as string}
          onChange={e => {
            setCurValue(e.target.value);
          }}
        />
      )}
      {question.optionType === 'input-time' && (
        <input
          type="time"
          value={curValue as string}
          onChange={e => {
            setCurValue(e.target.value);
          }}
        />
      )}
      {question.optionType === 'select-list' && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setCurValue(index);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {question.optionType === 'select-grid' && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setCurValue([...(curValue as number[]), index]);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {idx < 9 ? (
        <NextBtn text="다음" onClick={moveNextIdx} />
      ) : (
        <NextBtn text="완료" onClick={onSubmit} />
      )}
      {idx > 5 && idx < 9 && (
        <NextBtn
          btnType="none-border"
          text="건너뛰기"
          onClick={() => {
            setIdx(prev => prev + 1);
          }}
        />
      )}
    </>
  );
};

export default QuestionPage;
