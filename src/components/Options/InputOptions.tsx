import { BaseAnswer } from '@/types';
import { useState } from 'react';
import { Input } from '@/components/Input';
import { Button } from '../Button';

type InputOptionsType = {
  id: string;
  inputs?: { type: 'number' | 'text'; label: string; value: string }[];
  action: (id: string, answer: BaseAnswer[]) => void;
  lastQuestion: boolean;
};

export const InputOptions = ({
  id,
  inputs,
  action,
  lastQuestion,
}: InputOptionsType) => {
  const [inputsValue, setInputsValue] = useState(inputs || []);

  const handleInputChange = (value: string, index: number) => {
    setInputsValue((prev) => {
      const newArray = structuredClone(prev);

      newArray[index].value = value;

      return newArray;
    });
  };

  const checkDisabled = () => !inputsValue.every((input) => input.value !== '');

  return (
    <>
      <div className='flex flex-col gap-2 mb-5 md:mb-8'>
        {inputs?.length
          ? inputs.map((input, i) => (
              <div key={i} className='h-[56px]'>
                <Input
                  type={input.type}
                  placeholder={input.label}
                  value={inputsValue[i].value}
                  onChange={(e) => handleInputChange(e.target.value, i)}
                />
              </div>
            ))
          : null}
      </div>

      <Button
        disabled={checkDisabled()}
        type={lastQuestion ? 'submit' : 'button'}
        onClick={() => action(id, inputsValue)}
        title='Nextas'
      />
    </>
  );
};
