import type { MetaFunction } from '@remix-run/node';
import { BaseMetaData } from '~/constants/MetaData';

export const meta: MetaFunction = () => {
  return BaseMetaData();
};

export default function Index() {
  return (
    <div className={'bg-red-800'}>
      <h1>HELLO WORLD</h1>
    </div>
  );
}
