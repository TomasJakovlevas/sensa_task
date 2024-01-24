import { AnswerType, BaseAnswer, OptionType } from '@/types';
import { useState } from 'react';
import { CheckButton } from '../CheckButton';
import { Button } from '../Button';

type MultiOptionType = {
  id: string;
  options?: OptionType[];
  action: (id: string, answer: BaseAnswer[]) => void;
  selected: AnswerType | undefined;
  lastQuestion: boolean;
};

export const MultiOption = ({
  id,
  options,
  action,
  selected,
  lastQuestion,
}: MultiOptionType) => {
  const [selectedOptions, setSelectedOptions] = useState<BaseAnswer[]>(
    (selected?.answer as BaseAnswer[]) || []
  );

  const handleCheckBox = (
    checked: boolean,
    value: string | boolean,
    label: string
  ) => {
    setSelectedOptions((prev) => {
      if (checked) {
        return [...prev, { value, label }];
      } else {
        return prev.filter((option) => option.value !== value);
      }
    });
  };

  const getChecked = (value: string | boolean) =>
    !!selectedOptions.find((option) => option.value === value);

  return (
    <>
      <p className='text-sm text-center mb-[30px] md:text-base'>
        Select all that apply.
      </p>
      <ul className='mb-5 md:mb-8'>
        {options?.map((option, index) => (
          <li key={index} className='mb-2'>
            <CheckButton
              id={option.id}
              label={option.label}
              checked={getChecked(option.value)}
              onChange={(e) =>
                handleCheckBox(e.target.checked, option.value, option.label)
              }
            />
          </li>
        ))}
      </ul>
      <Button
        disabled={!selectedOptions.length}
        type={lastQuestion ? 'submit' : 'button'}
        onClick={() => {
          action(id, selectedOptions);
        }}
        title='OK, lets do it!'
      />
    </>
  );
};
