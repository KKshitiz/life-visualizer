import React, { forwardRef } from "react";
import Alert from "./Alert";
import Label from "./Label";

export type InputFieldProps = {
  label?: string;
  error?: string;
} & JSX.IntrinsicElements["input"];

const Input = (props: InputFieldProps, ref: React.Ref<HTMLInputElement>) => {
  const { label, error, name } = props;
  return (
    <div className="mb-1">
      <div className="flex justify-between">
        {label && <Label htmlFor={name}>{label}</Label>}
        <input
          id={name}
          ref={ref}
          {...props}
          className=""
          aria-invalid={error ? "true" : "false"}
        />
      </div>
      {error && <Alert type="error">{error}</Alert>}
    </div>
  );
};

export default forwardRef<HTMLInputElement, InputFieldProps>(Input);
