import {MouseEventHandler} from 'react';


export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props}>
      {props.text}
    </button>);
}
