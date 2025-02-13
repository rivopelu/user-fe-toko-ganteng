import { ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/react';

export function MainProviders(props: IProps) {
  return <HeroUIProvider>{props.children}</HeroUIProvider>;
}

interface IProps {
  children: ReactNode;
}
