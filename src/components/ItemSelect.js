// This takes the props provided and creates an input dropdown with the relevant options
import React from "react";

function ItemSelect({ id, label, options, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <select id={id} onChange={onChange}>
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
