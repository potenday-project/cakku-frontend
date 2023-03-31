interface Question {
  idx: number;
  questionText: string;
  answerType: 'input' | 'select-list' | 'select-grid';
}
type GetQuestionFunc = (useName: string, cardTitle: string) => Question[];

const getQuestions: GetQuestionFunc = (userName, cardTitle) => {
  const questionList: Question[] = [
    {
      idx: 1,
      questionText: `hello world`,
      answerType: 'input'
    }
  ];

  return questionList;
};

export { getQuestions };
