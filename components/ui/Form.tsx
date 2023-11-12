"use client";

import { useRef } from "react";

const Form = ({ children, action, className }) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
