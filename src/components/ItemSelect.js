function ItemSelect({ id, label, options }) {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <select id={id}>
        {options.map(({ value, name }, index) => (
          <option key={index} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ItemSelect };
