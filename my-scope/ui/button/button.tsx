import React from 'react';
import classes from './button.module.css';
export type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string,
  onClick: React.MouseEventHandler,
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}
