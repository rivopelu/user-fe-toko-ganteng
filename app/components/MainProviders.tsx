import { ReactNode } from 'react';

export function MainProviders(props: IProps) {
  return <>{props.children}</>;
}

interface IProps {
  children: ReactNode;
}
