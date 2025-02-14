import { ReactNode } from 'react';

export function Card(props: IProps) {
  return <div>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
