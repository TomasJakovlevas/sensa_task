interface CheckButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
export const CheckButton = ({
  id,
  label,
  checked,
  ...rest
}: CheckButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={`border p-5 rounded-lg flex items-center justify-between ${
        checked ? 'border-[2px] border-primary' : null
      }`}
    >
      <span className='font-semibold lg:text-lg'>{label}</span>
      <input
        {...rest}
        checked={checked}
        id={id}
        name={label}
        type='checkbox'
      ></input>
    </label>
  );
};
