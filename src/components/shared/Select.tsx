import { FunctionComponent, useState } from "react";

interface AppSelectProps {
  name: string;
  id: string;
  initialValue: string;
  onChange: (val: string) => void;
  options: string[];
}

const AppSelect: FunctionComponent<AppSelectProps> = ({
  onChange,
  name,
  id,
  initialValue,
  options,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      data-testid="app-select"
      id={id}
      name={name}
      value={value}
      onChange={handleValueChange}
    >
      {options.map((val) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
