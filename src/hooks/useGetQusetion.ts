import { QuizContext } from '@/lib/providers';
import { QuestionType } from '@/types';
import { useContext, useEffect, useState } from 'react';

export const useGetQuizQuestion = (id: string) => {
  const data = useContext(QuizContext);
  const [question, setQuestion] = useState<
    (QuestionType & { index: number; from: number }) | null
  >(null);

  useEffect(() => {
    const foundIndex = data?.questions.findIndex(
      (question) => question.id === id
    );

    if (foundIndex !== undefined && foundIndex !== -1) {
      const foundQuestion = data?.questions[foundIndex];

      if (foundQuestion) {
        setQuestion({
          ...foundQuestion,
          index: foundIndex,
          from: data?.questions.length - 1,
        });
      }
    }
  }, [data?.questions, id]);

  return question;
};
