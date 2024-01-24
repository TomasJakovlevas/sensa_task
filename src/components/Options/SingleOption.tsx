import { BaseAnswer, OptionType } from '@/types';
import { Button } from '../Button';

type SingleOptionType = {
  id?: string;
  options?: OptionType[];
  action: (id: string, answer: BaseAnswer, extraQuestion?: string) => void;
  lastQuestion: boolean;
};

export const SingleOption = ({
  id,
  options,
  action,
  lastQuestion,
}: SingleOptionType) => {
  return (
    <ul>
      {options?.map((option, index) => (
        <li key={index} className='mb-2'>
          <Button
            title={option.label}
            type={lastQuestion ? 'submit' : 'button'}
            onClick={() => {
              if (!id) return;
              action(
                id,
                { value: option.value, label: option.label },
                option.hasExtraQuestion
              );
            }}
            color='secondary'
            arrow
          />
        </li>
      ))}
    </ul>
  );
};
