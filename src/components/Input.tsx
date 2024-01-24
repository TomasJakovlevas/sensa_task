interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className='h-full w-full p-4 rounded-lg outline-primary bg-input'
      {...rest}
    />
  );
};
