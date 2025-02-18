export type NumberInputProps = {
  value: number | null,
  onChange: (value: number | null) => void,
  label: {
    id: string,
    text: string
  }
};

export const NumberInput = ({label, onChange, value}:NumberInputProps) => {
  return (
    <label className="input" aria-label={label.id}>
      {label.text}
      <input
        type="number"
        value={value ?? ''}
        onChange={(event) => onChange(Number(event.target.value))}
        name={label.id}
        data-testid={label.id} />
    </label>
  );
};
