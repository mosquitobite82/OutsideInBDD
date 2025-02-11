import {MouseEventHandler} from 'react';

export interface ButtonProps {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props}>
      {props.name}
    </button>);
}
