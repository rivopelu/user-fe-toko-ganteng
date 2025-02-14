import { SignInPage } from '~/pages/auth/SignInPage';
import type { MetaFunction } from '@remix-run/node';
import { BaseMetaData } from '~/constants/MetaData';

export const meta: MetaFunction = () => {
  return BaseMetaData({ title: 'Sign In' });
};
export default function AuthSignInRoute() {
  return <SignInPage />;
}
