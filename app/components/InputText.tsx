import { twMerge } from 'tailwind-merge';
import { HTMLInputTypeAttribute } from 'react';

export function InputText(props: IProps) {
  return (
    <div className={'grid gap-1'}>
      {props.label && (
        <label className={'text-xs'} htmlFor={props.id}>
          {props.label} {props.required && <span className={'text-red-700'}>*</span>}
        </label>
      )}
      <input
        type={props.type}
        placeholder={'placeholder'}
        className={twMerge(
          'border-2 py-2 px-3 rounded-md w-full bg-white',
          'focus:outline-black/50 focus:ring-primary-main focus:bg-primary-main/5',
        )}
        id={props.id}
      />
    </div>
  );
}

interface IProps {
  id: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}
