import MidArrow from '@/assets/icons/mid-arrow.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: 'primary' | 'secondary';
  arrow?: boolean;
}

export const Button = ({
  title,
  color = 'primary',
  arrow,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`p-3 rounded-lg w-full border flex items-center 
       ${color === 'primary' ? 'bg-primary text-white' : null}
       ${color === 'secondary' ? 'bg-white' : null}
       ${arrow ? 'justify-between' : 'justify-center'}
       ${
         disabled
           ? '!bg-disabled text-input'
           : color === 'primary'
           ? 'shadow-custom'
           : null
       }
       `}
      {...rest}
      disabled={disabled}
    >
      <span className='font-semibold lg:text-lg'>{title}</span>
      {arrow && (
        <div
          className={`${color === 'primary' && '[&>svg]:fill-[white]'} ${
            color === 'secondary' && '[&>svg]:fill-[primary]'
          }`}
        >
          <MidArrow />
        </div>
      )}
    </button>
  );
};
