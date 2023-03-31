// import { Question, GetQuestionFunc } from 'types/question';

export default function getQuestion(idx: number, text: string) {
  console.log(idx, text);
  const questionList: QuestionType[] = [
    {
      idx: 1,
      title: `반가워요! 어떻게 불러드리면 될까요?`,
      optionType: 'input-text',
      answerLimit: 5
    },
    {
      idx: 2,
      title: `${text}님의 카드에 어떤 내용을 담을까요?`, // user name
      optionType: 'select-list'
    },
    {
      idx: 3,
      title: `${text}에 대한 카드를 만들고 싶으시군요!`, // invitation type
      description: '조금 더 자세하게 알려주실 수 있나요?',
      optionType: 'select-list'
    },
    {
      idx: 4,
      title: `오호! ${text}이군요? 한 줄로 요약한다면?`, // invitation detail type
      description: '예시) 현지네 집들이, 다경이의 생일 파티',
      optionType: 'input-text',
      answerLimit: 12
    },
    {
      idx: 5,
      title: `${text} 하면 어떤 것들이 떠오르시나요?`, // invitation title
      description: '최대 3개까지 선택할 수 있아요!',
      optionType: 'select-grid'
    },
    {
      idx: 6,
      title: `${text} 언제할 지 정하셨나요?`, // invitation title
      optionType: 'select-list'
    },
    {
      idx: 7,
      title: `${text} 몇 시에 할 지 정하셨나요?`, // invitation title
      optionType: 'select-list'
    },
    {
      idx: 8,
      title: `${text} 어디서 할 지 정하셨나요?`, // invitation title
      description: '거의 다 왔어요!',
      optionType: 'select-list'
    },
    {
      idx: 9,
      title: `드디어 마지막! 더 전하고 싶은 말이 있나요?`,
      description: '거의 다 왔어요!',
      optionType: 'select-list'
    }
  ];

  return questionList[idx];
}
