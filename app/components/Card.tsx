import { ReactNode } from 'react';

export function Card(props: IProps) {
  return <div className={'border-2 rounded-lg'}>{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={'p-4'}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
