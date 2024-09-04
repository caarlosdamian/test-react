import { InputHTMLAttributes } from 'react';
import './TextBox.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextBox = (props: Props) => {
  const { id, label, ...rest } = props;
  return (
    <label htmlFor={id}>
      {label}
      <input type="text" id={id} {...rest} />
    </label>
  );
};
