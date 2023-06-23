import { useId } from "react";

import { cn } from "~/utils/misc.ts";

import { Button, type ButtonProps } from "./ui/button.tsx";
import { Input, type InputProps } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";

export type ListOfErrors = Array<null | string | undefined> | null | undefined;

export function ErrorList({
  errors,
  id
}: {
  errors?: ListOfErrors;
  id?: string;
}) {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length) return null;
  return (
    <ul className="space-y-1" id={id}>
      {errorsToRender.map((e) => (
        <li className="text-xs text-red-600" key={e}>
          {e}
        </li>
      ))}
    </ul>
  );
}

export function InputField({
  className,
  errors,
  inputProps,
  labelProps
}: {
  className?: string;
  errors?: ListOfErrors;
  inputProps: Omit<InputProps, "className">;
  labelProps: Omit<(typeof Label)["propTypes"], "className">;
}) {
  const fallbackId = useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} {...labelProps} />
      <Input
        aria-describedby={errorId}
        aria-invalid={errorId ? true : undefined}
        id={id}
        {...inputProps}
      />
      <div className="px-4 pb-3 pt-1">
        {errorId ? <ErrorList errors={errors} id={errorId} /> : null}
      </div>
    </div>
  );
}

export function CheckboxField({
  checkboxProps,
  className,
  errors,
  labelProps
}: {
  checkboxProps: Omit<JSX.IntrinsicElements["input"], "className" | "type"> & {
    type?: string;
  };
  className?: string;
  errors?: ListOfErrors;
  labelProps: Omit<(typeof Label)["propTypes"], "className">;
}) {
  const fallbackId = useId();
  const id = checkboxProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex gap-2">
        <Label htmlFor={id} {...labelProps} />
        <input
          aria-describedby={errorId}
          aria-invalid={errorId ? true : undefined}
          id={id}
          {...checkboxProps}
          type="checkbox"
          value="on"
        />
      </div>
      <div className="px-4 pb-3 pt-1">
        {errorId ? <ErrorList errors={errors} id={errorId} /> : null}
      </div>
    </div>
  );
}

export function SubmitButton({
  state = "idle",
  submittingText = "Submitting...",
  ...props
}: ButtonProps & {
  state?: "idle" | "loading" | "submitting";
  submittingText?: string;
}) {
  return (
    <Button
      {...props}
      className={props.className}
      disabled={props.disabled || state !== "idle"}
    >
      <span>{state !== "idle" ? submittingText : props.children}</span>
    </Button>
  );
}
