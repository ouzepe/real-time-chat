import React from "react";

export interface InputProps {
  type: "text" | "password";
  title?: string;
  value: string;
  setValue: (value: string) => void;
}
export default function Input({ type, title, value, setValue }: InputProps) {
  return (
    <label className='w-100 flex flex-wrap border border-sky-400 rounded p-2 mt-2'>
      <span className='w-screen text-gray-400'>{title}</span>
      <input
        type={type}
        className='cursor-pointer focus:outline-none text-gray-600'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
