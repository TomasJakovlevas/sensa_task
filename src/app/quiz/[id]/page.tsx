'use client';

import { AnalyzingData } from '@/components/AnalyzingData';
import { QuizNavigation } from '@/components/QuizNavigation';
import { QuizQuestionByType } from '@/components/QuizQuestionByType';
import { useGetQuizQuestion } from '@/hooks/useGetQusetion';
import {
  QuizContext,
  isInfoQuestionType,
  isInputQuestionType,
  isOptionsQuestionType,
} from '@/lib/providers';
import { BaseAnswer } from '@/types';
import { useRouter } from 'next/navigation';

import { useCallback, useContext, useState } from 'react';

export default function Quiz({ params }: { params: { id: string } }) {
  const question = useGetQuizQuestion(params.id);
  const quizContext = useContext(QuizContext);
  const router = useRouter();

  const [mockMutating, setMockMutating] = useState(false);

  const goToTheNextStep = useCallback(
    (id: string, extraQuestion?: string) => {
      const nextStep = extraQuestion
        ? extraQuestion
        : quizContext?.getNextQuestion(id);

      if (nextStep) router.push(nextStep);
    },
    [router, quizContext]
  );

  const saveOptions = useCallback(
    (
      id: string,
      answer?: BaseAnswer | BaseAnswer[],
      extraQuestion?: string
    ) => {
      if (answer !== undefined) {
        quizContext?.setAnswers({
          id,
          answer,
        });
      }
      goToTheNextStep(id, extraQuestion);
    },
    [quizContext, goToTheNextStep]
  );

  const questionAnswer = (id: string) => quizContext?.getAnswer(id);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(quizContext?.answers);
    setMockMutating(true);

    quizContext?.claerAnwsers();
  };

  return mockMutating ? (
    <AnalyzingData />
  ) : question ? (
    <main className='min-h-screen'>
      <QuizNavigation
        page={{ current: question?.index + 1, total: question?.from + 1 }}
      />
      <div className='px-6 py-4 flex flex-col gap-5 max-w-[740px] mx-auto md:mt-[100px]'>
        <h1 className='text-[30px] font-semibold md:text-center md:text-[54px]'>
          {question?.label}
        </h1>
        {question.subHeading && (
          <p className='md:text-center'>{question.subHeading}</p>
        )}
        <form onSubmit={handleSubmit}>
          <QuizQuestionByType
            id={question.id}
            type={question.type}
            saveAction={saveOptions}
            questionAnswer={questionAnswer}
            {...(isOptionsQuestionType(question) && {
              options: question.options,
            })}
            {...(isInputQuestionType(question) && {
              inputs: question.inputs,
            })}
            {...(isInfoQuestionType(question) && {
              content: question.content,
            })}
            lastQuestion={question.from === question.index}
          />
        </form>
      </div>
    </main>
  ) : null;
}
