import { Card, CardBody } from '~/components/Card';

export function SignInPage() {
  return (
    <div className={'grid grid-cols-2 min-h-screen'}>
      <div className={'h-full bg-red-100'}>HELLO WORLD</div>
      <div className={'flex items-center flex-col justify-between h-full lg:my-24'}>
        <h1>SIGN IN</h1>
        <Card>
          <CardBody>
            <h1>SIGN IN</h1>
          </CardBody>
        </Card>
        <h1>SIGN IN</h1>
      </div>
    </div>
  );
}
