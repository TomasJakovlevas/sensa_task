export type OptionTypes =
  | 'single-option'
  | 'multiple-options'
  | 'info'
  | 'input-options';

export type BaseQuestionType = {
  id: string;
  extra?: boolean;
  label: string;
  subHeading?: string;
  type: OptionTypes;
};

export type OptionsQuestionType = BaseQuestionType & {
  type: 'single-option' | 'multiple-options';
  options: OptionType[];
};

export type InfoQuestionType = BaseQuestionType & {
  type: 'info';
  content: string;
};

export type InputQuestionType = BaseQuestionType & {
  type: 'input-options';
  inputs: { type: 'number' | 'text'; label: string; value: string }[];
};

export type QuestionType =
  | OptionsQuestionType
  | InfoQuestionType
  | InputQuestionType;

export type OptionType = {
  id: string;
  label: string;
  value: string | boolean;
  hasExtraQuestion?: string;
};

export type BaseAnswer = {
  value: string | boolean;
  label: string;
};

export type AnswerType = {
  id: string;
  answer: BaseAnswer | BaseAnswer[];
};

export type ContextType = {
  isLoading: boolean;
  isError: boolean;
  questions: QuestionType[];
  answers: AnswerType[];
  getAnswer: (id: string) => AnswerType | undefined;
  setAnswers: (answer: AnswerType) => void;
  claerAnwsers: () => void;
  getNextQuestion: (id: string, extraQuestion?: string) => string | null;
};
