interface QuestionType {
  idx: number;
  title: string;
  description?: string;
  optionType: 'input-text' | 'input-date' | 'select-list' | 'select-grid';
  answerLimit?: number;
}
