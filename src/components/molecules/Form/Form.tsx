import React, { FormEvent, ReactNode } from "react";

export interface PropsForm {
  children: ReactNode;
  onSubmit: Function;
}

export default function Form({ children, onSubmit }: PropsForm) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
}
