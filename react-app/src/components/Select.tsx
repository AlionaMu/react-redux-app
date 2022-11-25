const Select = ({options, defaultValue, value, onChange}: any) => {
  return (
    <select value={value} onChange={(event: any) => onChange(event.target.value)}>
      <option value="">{defaultValue}</option>
      {options.map((option: any) =>
        <option value={option.value} key={option.value}>
          {option.title}
        </option>
        )}
    </select>
  );
};

export default Select;