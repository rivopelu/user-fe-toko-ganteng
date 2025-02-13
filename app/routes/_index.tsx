import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Toko Ganteng' }, { name: 'description', content: 'Welcome to Toko ganteng' }];
};

export default function Index() {
  return (
    <div className={'bg-red-800'}>
      <h1>HELLO WORLD</h1>
    </div>
  );
}
