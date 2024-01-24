'use client';

import { createContext, useCallback, useState } from 'react';
import {
  AnswerType,
  ContextType,
  InfoQuestionType,
  InputQuestionType,
  OptionsQuestionType,
} from '@/types';
import {
  GetQuizQuestionsType,
  useGetQuizQuestions,
} from '@/hooks/useGetQuizQuestions';
import { useSyncSessionStorage } from '@/hooks/useSyncSessionStorage';

export const QuizContext = createContext<ContextType | null>(null);

export function isOptionsQuestionType(obj: any): obj is OptionsQuestionType {
  return obj?.type === 'multiple-options' || obj?.type === 'single-option';
}

export function isInputQuestionType(obj: any): obj is InputQuestionType {
  return obj?.type === 'input-options';
}

export function isInfoQuestionType(obj: any): obj is InfoQuestionType {
  return obj?.type === 'info';
}

export function Providers({ children }: any) {
  const [quizQuestions, isLoading, isError]: GetQuizQuestionsType =
    useGetQuizQuestions();
  const [quizAnswers, setQuizAnswers] = useState<AnswerType[]>([]);

  useSyncSessionStorage('sensa_quiz_asnwers', quizAnswers, setQuizAnswers);

  const getNextQuestion = useCallback(
    (id: string) => {
      const currIndex = quizQuestions.findIndex(
        (question) => question.id == id
      );

      let next;

      for (let i = currIndex + 1; i < +quizQuestions.length; i++) {
        const question = quizQuestions[i];

        if (!question.extra) {
          next = quizQuestions[i];
          break;
        }
      }

      return next ? next.id : null;
    },
    [quizQuestions]
  );

  const setAnswers = (newValue: AnswerType) => {
    setQuizAnswers((prev) => {
      const newArray = structuredClone(prev);
      const existingAnswerIndex = prev.findIndex(
        (answer) => answer.id === newValue.id
      );

      if (existingAnswerIndex !== -1) {
        newArray[existingAnswerIndex] = newValue;
      } else {
        newArray.push(newValue);
      }

      return newArray;
    });
  };

  const claerAnwsers = () => setQuizAnswers([]);

  const getAnswer = (id: string) =>
    quizAnswers.find((answer) => answer.id === id);

  return (
    <QuizContext.Provider
      value={{
        isLoading,
        isError,
        questions: quizQuestions,
        answers: quizAnswers,
        getAnswer,
        setAnswers,
        claerAnwsers,
        getNextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
