import { QuestionType } from '@/types';
import { useEffect, useState } from 'react';

export type GetQuizQuestionsType = [QuestionType[], boolean, boolean];

export const useGetQuizQuestions = (): GetQuizQuestionsType => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('../data/questions.json');

        if (response.status === 200) {
          const jsonData = await response.json();
          setData(jsonData);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);

          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);

        throw new Error(`Error: ${error}`);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading, isError];
};
