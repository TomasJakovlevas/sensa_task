import { Button } from '../Button';
import { LowImpactExercises } from '../InfoLayouts/LowImpactExercises';

type InfoOptionType = {
  id: string;
  action: (id: string) => void;
  content?: string;
  lastQuestion: boolean;
};

export const InfoOption = ({
  id,
  action,
  content,
  lastQuestion,
}: InfoOptionType) => {
  return (
    <>
      <div className='mb-5 md:mb-8'>
        {content
          ? {
              lowImpactExercises: <LowImpactExercises />,
            }[content]
          : null}
      </div>

      <Button
        type={lastQuestion ? 'submit' : 'button'}
        onClick={() => action(id)}
        title='Continue'
      />
    </>
  );
};
