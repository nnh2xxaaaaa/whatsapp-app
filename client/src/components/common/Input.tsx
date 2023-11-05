import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {label && <label htmlFor={name}>{name}</label>}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="bg-input-background text-start focus:outline-none text-white rounded-lg px-5 py-4 w-full"
        />
      </div>
    </div>
  );
  return <div>Input</div>;
}

export default Input;
