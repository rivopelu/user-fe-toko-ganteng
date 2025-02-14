export function Checkbox(props: IProps) {
  return (
    <label className={'gap-2 flex items-center cursor-pointer '}>
      <input
        onChange={(e) => props.onChange && props.onChange(e.target.checked || false)}
        className="accent-primary-main h-4 w-4 cursor-pointer active:scale-105 duration-300 hover:accent-primary-main/40"
        type="checkbox"
        checked={props.checked}
      />
      {props.label}
    </label>
  );
}

interface IProps {
  onChange?: (value: boolean) => void;
  label?: string;
  checked?: boolean;
}
