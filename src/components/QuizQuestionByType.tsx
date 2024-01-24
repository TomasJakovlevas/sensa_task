'use client';

import { SingleOption } from './Options/SingleOption';
import { MultiOption } from './Options/MultiOption';
import { AnswerType, BaseAnswer, OptionType, OptionTypes } from '@/types';
import { InputOptions } from './Options/InputOptions';
import { InfoOption } from './Options/InfoOption';

type QuizQuestionByTypeProps = {
  id: string;
  type: OptionTypes;
  inputs?: { type: 'number' | 'text'; label: string; value: string }[];
  options?: OptionType[];
  content?: string;
  saveAction: (
    id: string,
    answer?: BaseAnswer | BaseAnswer[],
    extraQuestion?: string
  ) => void;
  questionAnswer: (id: string) => AnswerType | undefined;
  lastQuestion: boolean;
};

export const QuizQuestionByType = ({
  id,
  type,
  options,
  inputs,
  content,
  saveAction,
  questionAnswer,
  lastQuestion,
}: QuizQuestionByTypeProps) => {
  switch (type) {
    case 'single-option':
      return (
        <SingleOption
          id={id}
          options={options}
          action={saveAction}
          lastQuestion={lastQuestion}
        />
      );
    case 'multiple-options':
      return (
        <MultiOption
          id={id}
          options={options}
          action={saveAction}
          selected={questionAnswer(id)}
          lastQuestion={lastQuestion}
        />
      );
    case 'info':
      return (
        <InfoOption
          id={id}
          action={saveAction}
          content={content}
          lastQuestion={lastQuestion}
        />
      );
    case 'input-options':
      return (
        <InputOptions
          id={id}
          action={saveAction}
          inputs={inputs}
          lastQuestion={lastQuestion}
        />
      );

    default:
      return null;
  }
};
