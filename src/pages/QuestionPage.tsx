import React from 'react';
import { getQuestions } from 'lib/questions';

const QuestionPage = () => {
  const questions = getQuestions('joie', 'birthday party!');
  return (
    <>
      <div>{questions[0].questionText}</div>
      <div>{questions[0].answerType}</div>
    </>
  );
};

export default QuestionPage;
