import { Card, CardBody } from '~/components/Card';
import { InputText } from '~/components/InputText';
import { Divider } from '~/components/Divider';
import { Button } from '~/components/Button';

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
          <Divider />

          <CardBody className={'grid gap-4'}>
            <InputText required id={'email'} label={'email'} placeholder={'sialahkan masukan email'} />
            <InputText required id={'password'} label={'Kata sandi'} placeholder={'sialahkan masukan kata sandi'} />
            <Button rounded={'medium'}>SIGN IN</Button>
          </CardBody>
        </Card>
        <h1>SIGN IN</h1>
      </div>
    </div>
  );
}
