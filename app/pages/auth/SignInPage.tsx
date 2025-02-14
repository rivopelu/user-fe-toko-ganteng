import { Card, CardBody } from '~/components/Card';
import { InputText } from '~/components/InputText';
import { Divider } from '~/components/Divider';
import { Button } from '~/components/Button';
import { Checkbox } from '~/components/Checkbox';
import { useState } from 'react';

export function SignInPage() {
  const [onShowPassword, setOnShowPassword] = useState<boolean>(false);

  return (
    <div className={'grid grid-cols-2 h-screen'}>
      <div className={'h-full bg-primary-main border-r-2'}></div>
      <div className={'flex items-center flex-col justify-between h-full py-8'}>
        <h1>SIGN IN</h1>
        <Card>
          <CardBody>
            <h1>SIGN IN</h1>
          </CardBody>
          <Divider />

          <CardBody className={'grid gap-4 min-w-md w-full'}>
            <p>Silahkan masukan informasi kamu buat masuk !</p>
            <InputText required id={'email'} label={'email'} placeholder={'sialahkan masukan email'} />
            <InputText
              type={onShowPassword ? 'text' : 'password'}
              required
              id={'password'}
              label={'Kata sandi'}
              placeholder={'sialahkan masukan kata sandi'}
            />
            <Checkbox checked={onShowPassword} onChange={setOnShowPassword} label={'Tampilkan kata sandi'} />
            <Button rounded={'medium'}>SIGN IN</Button>
          </CardBody>
        </Card>
        <h1>SIGN IN</h1>
      </div>
    </div>
  );
}
