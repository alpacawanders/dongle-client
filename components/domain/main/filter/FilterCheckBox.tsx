import CheckIcon from "@/assets/images/checkIcon.svg";
export default function FilterCheckBox({
  id,
  name,
  isChecked,
  onChange,
}: {
  id: string;
  name: string;
  isChecked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        id={id}
        checked={isChecked}
        type="checkbox"
        className="peer hidden"
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="peer flex h-4 w-4 cursor-pointer items-center justify-center rounded-[4px] border border-zinc-300 shadow-[0px_1px_4px_-1px_rgba(0,0,0,0.1)] peer-checked:border-primary-400 peer-checked:bg-primary-400"
      >
        <CheckIcon />
      </label>
      <label htmlFor={id} className="cursor-pointer font-medium text-zinc-500">
        {name}
      </label>
    </div>
  );
}
