import clsx from "clsx";

// TODO: It might be "clever" to add option.icon to the existing component <ButtonSelect />
export const ButtonIconSelect = <T extends Object>({
  options,
  value,
  onChange,
  group,
  className,
}: {
  options: {
    value: T;
    text: string;
    icon?: JSX.Element;
    testId?: string;
    class?: string;
  }[];
  value: T | null;
  onChange: (value: T) => void;
  group: string;
  className?: string;
}) => (
  <div className={clsx("buttonList buttonListIcon", className)}>
    {options.map((option) => (
      <label
        key={option.text}
        className={clsx(option.class, {
          active: value === option.value,
        })}
        title={option.text}
      >
        <input
          type="radio"
          name={group}
          onChange={() => onChange(option.value)}
          checked={value === option.value}
          data-testid={option.testId}
        />
        {option.icon || option.text}
      </label>
    ))}
  </div>
);
